// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
    
    .prompt([
        {
            type:'input',
            message: 'What is the title of your project?',
            name:'Title',
        },
        {
            type:'input',
            message:'Enter a description of your project',
            name:'Description',
        },
        {
            type:'input',
            message:'Enter installation instructions',
            name:'Installation',
        },
        {
            type:'input',
            message:'Enter usage information',
            name:'Usage',
        },
        {
            type:'input',
            message:'Enter license requirements',
            name:'License',
        },
        {
            type:'input',
            message:'Enter contribution guidelines',
            name:'Contributing',
        },
        {
            type:'input',
            message:'Enter test instructions',
            name:'Tests',
        },
        {
            type:'list',
            message:'What application did you use',
            name:'Application',
            choices:['VS Code', 'Terminal', 'GitHub', 'Course AI'],
        },
        {
            type:'input',
            message:'What is your GitHub username?',
            name:'GitHub',
        },
        {
            type:'input',
            message:'What is your email address?',
            name:'Email',
        }
    ]);
};

// TODO: Create a function to write README file
function createReadme({Title, Description, Installation, Usage, License, Contributing, Tests, Application, GitHub, Email}) {
    const content = `
        # ${Title}

        ## Description
        ${Description}

        ## Table of Contents
        - Installation#installation
        - Usage(#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)

        ## Installation
        ${Installation}

        ## Usage
        ${Usage}

        ## License
        This project is licensed under the ${License} license.

        ## Contributing
        ${Contributing}

        ## Tests
        ${Tests}

        ## Questions
        If you have any questions, please reach out:
        - GitHub: https://github.com/${GitHub}
        - Email: ${Email}
            `;

            fs.writeFile('README.md', content.trim(), (err) => {
                if (err) {
                    console.error('Error creating README file:', err);
                } else {
                    console.log('README.md file has been created successfully!');
                }
            });
        }


// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => {
        createReadme(answers);
    })
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
