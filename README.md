
undefined

# SQL Team Profile Generator

[Demo Video](https://drive.google.com/file/d/1xb1zzfFhj04lK5Sf0NEPQ43nv1q2ExMw/view?usp=sharing)

## Description 
AS A business owner I WANT to be able to view and manage the departments, roles, and employees in my company SO THAT I can organize and plan my business This application works to help organize a workplace's departments, roles and employees in order to increase operations and make it easy to access important workplace information in a sql database Through this application, I learned more about creating tables and databases in SQL, as well as using node and inquirer with SQL to get the necessary information

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Table of Contents
* [Description of Application](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contributions](#contributions)
* [Test Instructions](#test-instructions)
* [Questions](#questions)
* [License](#license)
      
## Installation Instructions 
To run this application, you will need to run an npm install inquirer, npm install mysql2, run mysql and source both the schema.sql and seeds.sql
      
## Usage Information 
To run this application, you will need to update the .env file to match your mysql username and password, log into mysql, source the schema.sql and seeds.sql (located in the db folder), and then run node server.js to begin the prompts
        
## Contributions & Credit 
There were no collaborators for this project
      
## Test Instructions
There are no tests to run for this project at this time
     
## Questions?
Please reach out with application questions via the email address and/or Github account below:

Github Username: [github.com/zoyasarow](https://github.com/zoyasarow)

Email Address: zoyasarow@gmail.com
      
## License Type
No License 
