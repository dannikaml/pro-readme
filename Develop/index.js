// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const process = require('process');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions: ',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How should a user run tests?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What should users know about contributing to this repository?',
  },
  {
     // list of licenses from github
    type: 'list',
    name: 'license',
    message: 'Which license have you used?',
    choices: ['The MIT License', 'GPL 3.0', 'APACHE 2.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  console.log('questions')
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.createReadme(path.join(process.cwd(), fileName), data);

} 

// Printing current directory
console.log("Current working directory: ", process.cwd());

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('generate');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
      });
    
}

// Function call to initialize app
init();
