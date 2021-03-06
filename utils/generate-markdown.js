function generateLicense(answers) {
  if (answers.license === 'MIT') {
return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (answers.license === 'GPLv2') {
return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (answers.license === 'Apache') {
return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
return "";
  }
}

function generateContribution(answers) {
  if (answers.contribution) {
return `
## Contribution
${answers.contribution}`
  } else {
return '';
  }
};

function generateTesting(answers) {
  if (answers.testing) {
return `
## Testing
${answers.testing}`
  } else {
return '';
  }
};

function generateLinks(answers) {
  if (answers.links) {
return `## Screenshots
 ![](${answers.links})`
  }
}

function generateMarkdown(answers) {
  console.log(answers);

  //create table of contents
  let generateTableOfContents = `## Table of Contents`;
    generateTableOfContents += `
* [Installation](#installation)`
  ;
    generateTableOfContents += `
* [Usage](#usage)`
  ;
  if (answers.contribution) {
    generateTableOfContents += `
* [Contribution](#contribution)`
  };
  if (answers.testing) {
    generateTableOfContents += `
* [Testing](#testing)`
  };
  if (answers.links) {
    generateTableOfContents += `
* [Screenshots](#screenshots)`
  };
  generateTableOfContents += `
* [Questions](#questions)`
  ;

  //create the bulk of the markdown from user answers
  let createMarkdown =
`# ${answers.title}

## License
${generateLicense(answers)}
* This application is covered under the ${answers.license} license.

## Project Description
${answers.description}
    
${generateTableOfContents}
    
## Installation
${answers.install}
    
## Usage
${answers.usage}
    
${generateContribution(answers)}
    
${generateTesting(answers)}

${generateLinks(answers)}
    
## Questions
For further information or questions regarding this project contact me at:
* GitHub: ${answers.github}
* Email: ${answers.email}
`;
createMarkdown += generateTableOfContents;
console.log(createMarkdown);
return createMarkdown;
};

module.exports = generateMarkdown;
