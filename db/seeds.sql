INSERT INTO departments (dept_name)
VALUES ("Development"),
       ("Marketing"),
       ("Human Resources"),
       ("Communications"); 

INSERT INTO roles (title, salary, department_id)
VALUES ("Front End Developer", "100000", "1"),
       ("Development Apprentice", "70000", "1"),
       ("Marketing Director", "80000", "2"),
       ("Marketing Manager", "60000", "2"),
       ("HR Coordinator", "70000", "3"),
       ("Director of HR", "90000", "3"),
       ("Communications Intern", "40000", "4"),
       ("Communications Mananger", "60000", "4");


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ("4001", "Vanessa", "Roman", "1", 4001),
       ("4002", "Tash", "Johnson", "2", NULL),
       ("4003", "Indie", "Imani", "3", 4003),
       ("4004", "Valentino", "Valentine", "4", NULL),
       ("4005", "Tay", "James", "5", 4005),
       ("4006", "Paola", "Munoz", "6", NULL),
       ("4007", "Terrence", "Robertson", "7", NULL);


            

   
       
