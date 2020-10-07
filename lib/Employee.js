// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');

inquirer.prompt([
                {name: "name",
                type: "input",
                message: "To add to your team please input the name of an employee:",
                },
                {
                name: "id",
                type: "input",
                message: "Enter the employee's ID number:"
                },
                {
                name: "email",
                type: "input",
                message: "Input employee's email:"
                },
                {
                name: "role",
                type: "list",
                message: "Select the employee's role:",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                    ]
                }
                
            ]).then(data => {
                this.name = data.name;
                this.id = data.id;
                this.email = data.email;
                this.role = data.role;
                console.log(data);
            })

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
        
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role = "Employee";
    }
}




module.exports = Employee;

