// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
      break;
    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "ISC":
      return "https://opensource.org/licenses/ISC";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") return "";
  else {
    return `${renderLicenseBadge(license)}(${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.test}

  ## How to Contribute
  ${data.contribution}

  ## License
  ${renderLicenseSection(data.license)}

  `;
}

export default generateMarkdown;
