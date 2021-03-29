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
      name:'contributorsTres', 
      message:'Are there additional contributors?', when:function(data){return data.contributorsMore}
    },
    {
      type:'input', 
      name:'githubThree', 
      message:'GitHub Username of contributor', when:function(data){return data.contributorsTres}
    },
    {
      type: 'input',
      message: 'What are your contribution guidelines?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'List any tests and instructions if applicable. Enter through, if not.',
      name: 'test',
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
