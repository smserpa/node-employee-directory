const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

function teamData() {
    
    return inquirer.prompt([
        
        {
            name: "role",
            type: "list",
            message: "To add to your team select the role of the employee:",
            choices: [
            "Manager",
            "Engineer",
            "Intern"
            ]
        },
        {
            name: "name",
            type: "input",
            message: "Enter employee's name:",
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
        
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        
        if (answers.role === "Manager") {
            team.push(manager);
            return exitDirectory();
        }else if (answers.role === "Engineer") {
            team.push(engineer);
            return exitDirectory();
        }else (answers.role === "Intern")
            team.push(intern);
            return exitDirectory();
    })
    .catch((err) => {
        console.log(err);
    });
    
}

function exitDirectory () {
    return inquirer.prompt([
        {
            name: "exit",
            type: "confirm",
            message: "The employee directory has been updated, would you like to add another employee?"

        },
    ])
    .then((answers) => {
        if (answers.exit) {
            return teamData();
        }else{
            return renderHTML();
        }
    })
}

function renderHTML() {
    fs.writeFile(outputPath, render(team), (err) => {
        if (err) console.log(err);
    })
}

teamData();
