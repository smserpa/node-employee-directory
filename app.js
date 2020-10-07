const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)





function teamData() {

    const manager = [];
    const engineer = [];
    const intern = [];

    const managerJSON = JSON.stringify(manager, null, 2);
    const engineerJSON = JSON.stringify(engineer, null, 2);
    const internJSON = JSON.stringify(intern, null, 2);

    const team = [];
    


    return inquirer.prompt([
        
        {
            name: "name",
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
        },
        {
            name: "github",
            type: "input",
            message: "Enter GitHub username: ",
            when: (answers) => answers.role === "Engineer",
        },
        {
            name: "school",
            type: "input",
            message: "Enter school name: ",
            when: (answers) => answers.role === "Intern",
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Enter office number: ",
            when: (answers) => answers.role === "Manager",
        },
    ])
    .then((answers) => {
        if (answers.role === "Manager") {
            manager.push(answers.name, answers.id, answers.email, answers.officeNumber);    
        } else if (answers.role === "Engineer") {
            engineer.push(answers.name, answers.id, answers.email, answers.github);
        }else (answers.role === "Intern")
            intern.push(answers.name, answers.id, answers.email, answers.school);
    })
    
}


teamData();





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
