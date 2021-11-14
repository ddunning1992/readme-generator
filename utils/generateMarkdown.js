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
const generateContribution = contributionText => {
  if (!contributionText) {
    return '';
  }

  return `
  ## How to Contribute
  ${data.contribution}
  `
}

const generateTesting = testingText => {
  if (!testingText)
  return '';
}

return `
## Testing Instructions
${data.testing}
`

function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.install}

  ## Usage Instructions
  ${data.usage}

  ${generateContribution(contribution)}

  ${generateTesting(testing)}

  ## Questions
  If you have additional questions, contact me at:
  GitHub: ${data.github}
  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
