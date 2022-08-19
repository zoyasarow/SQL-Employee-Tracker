// Imports and requirements
const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'workplace_db'
  },
  console.log(`Connected to workplace_db database.`)
);

// Init inquirer prompts and options
function begin() {
  inquirer.prompt([
    {
        message: 'What would you like to do?',
        type: 'list', 
        choices: ['Add Department', 'Add Role', 'Add Employee', 'View Departments', 'View Roles', 'View Employees', "Finish"],
        name: 'begin'
    }
]).then(response => {
    if (response.begin === "Add Department") {
      return addDepartment()
    } else if (response.begin === "Add Role") {
      return addRole()
    } else if (response.begin === "Add Employee") {
      return addEmployee()
    } else if (response.begin === "View Departments") {
      return departmentsAll()
    } else if (response.begin === "View Roles") {
      return rolesAll()
    } else if (response.begin === "View Employees") {
      return employeesAll()
    } else {
      return finish()
    }
})
};

  begin();

// functions for adding department, role & employee
function addDepartment() {
  inquirer.prompt([
  {
    message: 'What is the department name?',
    type: 'input',
    name: 'department'
  }    
  ]).then((response) => {
    const departmentNew = [response.department];
    db.query("INSERT INTO departments (dept_name) VALUES (?)", departmentNew, (err, result) => {
      if (err) {
        throw err
        return;
      }
      console.log('This department has been added!');
      return begin();
  });
})
}

function addRole() {
  inquirer.prompt([
    {
      message: 'What is the title of the role?',
      type: 'input',
      name: 'rTitle',
    },
    {
      message: 'What is the salary for this role?',
      type: 'input',
      name: 'rSalary',
    },
    {
      message: 'Please select the id number that matches the department (1=Development 2=Marketing 3=Human Resources 4=Communications) ',
      name: 'rDepartment',
      choices: ['1', '2', '3', '4']
    },

  ]).then((response) => {
    const roleNew = [response.rTitle, response.rSalary, response.rDepartment];
    db.query("INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)", roleNew, (err, result) => {
      if (err) {
        throw err
        return;
      }
      console.log ('This role has been added!')
      return begin();
    });
  })
}

function addEmployee() {
  inquirer.prompt([
    {
      message: 'Please enter the employees ID number',
      type: 'input',
      name: 'eId', 
    },
    {
      message: 'What is the first name of the employee?',
      type: 'input',
      name: 'eFirstName',
    },
    {
      message: 'What is the last name of the employee?',
      type: 'input',
      name: 'eLastName',
    },
    {
      message: 'Please enter their role id based on department (1=Development 2=Marketing 3=Human Resources 4=Communications)?',
      type: 'input',
      name: 'eRoleId',
    },

  ]).then((response) => {
    const employeeNew = [response.eId, response.eFirstName, response.eLastName, response.eRoleId];
    db.query("INSERT INTO employee (id, first_name, last_name, role_id) VALUES (?,?,?)", employeeNew, (err, result) => {
      if (err) {
        throw err
        return;
      }
      console.log ('Employee has been added!')
      return begin();
    });
  })
}

// functions for viewing departments, roles & employees
function departmentsAll() {
  db.query("SELECT * FROM departments", (err, response) => {
    if (err) {
      throw err
      return;
    }
    console.table(response);
    return begin();
  });
}

function rolesAll() {
  db.query("SELECT * FROM roles", (err, response) => {
    if (err) {
      throw err
      return;
    }
    console.log('1=Development 2=Marketing 3=Human Resources 4=Communications')
    console.table(response);
    return begin();
  });
}

function employeesAll() {
  db.query("SELECT * FROM employee", (err, response) => {
    if (err) {
      throw err
      return;
    }
    console.table(response);
    return begin();
  });
}

function finish() {
  console.log('Your changes have been saved! You are back at the main menu');
  return begin()
};















