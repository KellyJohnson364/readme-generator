// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions= () => {
  return inquirer.prompt([

    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What steps are required to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use.',
      name: 'usage',
    },
    {
      type:'confirm',
      name:'screenshot', 
      message:'Do you have a screenshot?'
    },
    {
      type: 'input',
      message: 'What is the file name of your screenshot? (Save file in images folder in assets folder)',
      name: 'filename', when:function(data){return data.screenshot}
    },
    {
      type:'confirm',
      name:'video', 
      message:'Do you have a video?'
    },
    {
      type: 'input',
      message: 'What is the file name of your video? (Place file in images folder in assets folder)',
      name: 'videoname', when:function(data){return data.video}
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type:'confirm',
      name:'contributors', 
      message:'Are there additional contributors?'
    },
    {
      type:'input', 
      name:'githubOne', 
      message:'GitHub Username of contributor', when:function(data){return data.contributors}
    },
    {
      type:'confirm', 
      name:'contributorsMore', 
      message:'Are there additional contributors?', when:function(data){return data.contributors}
    },
    {
      type:'input',
      name:'githubTwo', 
      message:'GitHub Username of contributor', when:function(data){return data.contributorsMore}
    },
    {
      type:'confirm', 
      name:'contribution', 
      message:'Would you like to invite others to contribute?',
    },
    {
      type:'confirm', 
      name:'covenant', 
      message:'Would you like to reference the Contributor Covenant Code of Conduct?', when:function(data){return data.contribution},
    },
    {
      type: 'input',
      message: 'What would you like others to know about contributing?', when:function(data){return data.contribution},
      name: 'invite',
    },
    {
      type: 'confirm',
      message: 'Would you like to add a Test section?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'List Tests and instructions on how to run them', when:function(data){return data.test},
      name: 'testing',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'list',
      message: 'Choose an open source license',
      name: 'license',
      choices: ['Apache 2.0','Mozilla Public License Version 2.0', 'The Unlicense', 'GNU General Public License v3.0', 'MIT License'],
    },
    
  ])
}
  
// TODO: Create a function to write README file


// TODO: Create a function to initialize app
//function init() {}
const init = () => {
  questions()
  .then((data) => {
    const readmeContent = generateMarkdown(data);
  
    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
}
// Function call to initialize app
//init();


init();
