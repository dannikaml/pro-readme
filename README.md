# Professional README Generator

## Description
***
Using a command-line application to generate/create a README file. 

A high quality README.md should include a detailed description of the project, how to use it, how to install it, how to report issues, and how to make contributions so that others can help with the development of your project. 

## Usage
***
By utilizing Node.js we can create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.

In order to install inquirer, please use:

```
npm i inquirer@8.2.4
```

The application will be invoked by using the following command:
```
node index.js
```

***
### User Story
```
AS A developer

I WANT a README generator

SO THAT I can quickly create a professional README for a new project
```
### Acceptance Criteria
```
GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository

THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title

THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options

THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username

THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address

THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents

THEN I am taken to the corresponding section of the README
```

***
## Link to walk-through video
https://drive.google.com/file/d/1WoZ6waunGVsfK6YpPdDE3Iv5oE1Gq6CR/view


***
### Sources

YouTube:
- https://www.youtube.com/watch?v=2VUQABoFOqw
- https://www.youtube.com/watch?v=9YivEQFpmHQ&t=32s

geeksforgeeks:
- https://www.geeksforgeeks.org/node-js-process-cwd-method/
- https://www.geeksforgeeks.org/difference-between-process-cwd-and-__dirname-in-node-js/

w3schools:
- https://www.w3schools.com/nodejs/met_path_join.asp

stackoverflow:
- https://stackoverflow.com/questions/39658611/nodejs-get-absolute-path-relative-to-process-cwd
- https://stackoverflow.com/questions/67013842/trying-to-place-license-badge-within-readme-md-using-node-js-but-getting-error-a

scaler:
- https://www.scaler.com/topics/javascript/import-js-file-in-js/