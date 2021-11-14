function generateContribution() {
  if (answers.contribution) {
    return `
    ## Contribution
    ${answers.contribution}`
  } else {
    return '';
  }
};

function generateTesting() {
  if (answers.testing) {
    return `
    ## Testing
    ${answers.testing}`
  } else {
    return '';
  }
};

function generateMarkdown(answers) {

  //create table of contents
  let generateTableOfContents = `## Table of Contents`;
  if (answers.install) {
    generateTableOfContents += `
    * [Installation](#installation)`
  };
  if (answers.usage) {
    generateTableOfContents += `
    * [Usage](#usage)`
  };
  if (answers.contribution) {
    generateTableOfContents += `
    * [Contribution](#contribution)`
  };
  if (answers.testing) {
    generateTableOfContents += `
    * [Testing](#testing)`
  };

  //create the bulk of the markdown from user answers
  let createMarkdown =
    `# ${answers.title}
  
    ## Project Description
    ${answers.description}
    
    ${generateTableOfContents}
    
    ## Installation
    ${answers.install}
    
    ## Usage
    ${answers.usage}
    
    ${generateContribution()}
    
    ${generateTesting()}
    
    ## Questions
    For further information or questions regarding this project contact me at:
    GitHub: ${answers.github}
    Email: ${answers.email}
    `;
    createMarkdown += generateTableOfContents;
    console.log(createMarkdown);
    return createMarkdown;
};

module.exports = generateMarkdown;
