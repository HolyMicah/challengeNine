// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const fileName = "sampleREADME.md"
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = ([
        {
            type: "input",
            message: "What is the name of your application?",
            name: "title",
        },
        {
            type: 'input',
            message: 'Can you give a brief description of your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Can you give some instructions for users to install your project?',
            name: 'instructions',
        },
        {
            type: 'input',
            message: 'Please give some brief directions for using and navigating your project.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Did you have any contributors you would like to give credit to?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'How can users test your project?',
            name: 'testing',
        },
        {
            type: "checkbox",
            message: "What License did you use for this repository?",
            choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
            name: "license",
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data)
    fs.writeFile(fileName, markdown, err => {
        if (err) {
            return console.log(err);
        }
        console.log('success!')
    });
}
    

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        writeToFile(fileName, data)
    });
}


// Function call to initialize app
init();









