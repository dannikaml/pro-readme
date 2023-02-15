// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description

  ${data.description}


   ### Installation

  Instructions for successful installation:

  ${data.installation}


   ### Usage

  ${data.usage}

  
  ### Contributing

  ${data.contributing}


   ### Tests

   Test by using the instructions below:

   ${data.test}


   ### Questions

  For questions please refer to my email: 
  
  ${data.email}

  or click the link to visit my GitHub profile: 
  
  [${data.github}](https://github.com/${data.github}/).


`;
}

module.exports = generateMarkdown;
