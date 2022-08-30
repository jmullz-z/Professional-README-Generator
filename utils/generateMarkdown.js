// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license !== 'No License') {
    return `
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)
    `;
  } else {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseTOC(data) {
  if (data.license !== 'No License') {
    return `
# License`;
    } else {
      return;
    }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    if (data.license !== 'No License') {
      return `
![badge](https://img.shields.io/badge/license-${data.license}blue)`;
    } else {
      return;
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description]
  ${data.what}
  ${data.why}
  ${data.how}
  ## [Installation]
  ${data.installation}
  ## [Usage]
  ${data.usage}
  For more information on how to add screenshots for examples, visit the following website:
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  ${renderLicenseSection(data.license)}
  ## [Contributing]
  ${data.confirmContributers, data.contribute}
  ## [Tests]
  ${data.test}
  ## [Questions]
  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
