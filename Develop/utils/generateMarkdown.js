// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license-)`
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License 
    This application is covered by the ${license} license.`
  }
  return ``;
}







// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


  ## Description

  ${data.description}

  ## Table of Contents 
- [Installation](#installation-)
- [Usage](#usage-)
${renderLicenseLink(data.license)}
- [Test](#tests-)
- [Credits](#credits-)
- [Questions](#questions-)
- [Deployed Application](#deployed-application-)



 ### Installation

  Instructions for successful installation:
  \`\`\`
  ${data.installation}
  \`\`\`

 ### Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}


  
  ### Contributing

  ${data.contributing}


   ### Tests

   Test by using the instructions below:
   \`\`\`
   ${data.test}
   \`\`\`

   ### Questions

  For questions please refer to my email: 
  
  ${data.email}

  or click the link to visit my GitHub profile: 
  
  [${data.github}](https://github.com/${data.github}/).


`;
}

module.exports = generateMarkdown;
