// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('./README.md')
const markdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your application?',
            name: 'title',
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
        }
    ]);

// TODO: Create a function to write README file
function writeToFile({title, description, instructions, usage, contribution, testing}){
    `${title}`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();








