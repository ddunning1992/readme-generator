const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptUser = projectData => {

    if (!projectData) {
        projectData = [];
    }

    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your application? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your application name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your application. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an application description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Describe how to install the application. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please give the install directions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use the application (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please describe how to use the application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Give instructions for how to contribute to the project.',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Give instructions for testing the application.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license badge would you like to inlude?',
            choices: ['MIT', 'GPLv3', 'GPL', 'none'],
            default: 'none'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide a link to your GitHub profile. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a link to your GitHub profile!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your email!');
                    return false;
                }
            }
        }
    ])
    .then(projectAnswers => {
        projectData.push(projectAnswers);
        console.log(projectData);
        return projectData;
    })
};

promptUser()
    .then(projectData => {
        return generateMarkdown(projectData);
    })
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}