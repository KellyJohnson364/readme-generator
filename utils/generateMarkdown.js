// TODO: Create a function that returns a license badge based on which license is passed in

let badge;
let licenseSection;
let testSection;
let one;
let two;
let three;


function renderLicenseBadge(data) {
   if (data.license == 'Apache 2.0') {
      badge = `[![Apache 2.0](https://img.shields.io/badge/License-APACHE-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)`  
   } else if (data.license == 'Mozilla Public License Version 2.0') {
      badge =  `[![Mozilla Public License Version 2.0](https://img.shields.io/badge/License-MOZILLA-yellow.svg)](https://www.mozilla.org/en-US/MPL/2.0/)`
   } else if (data.license == 'GNU General Public License v3.0') {
      badge = `[![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)`
   } else if (data.license == 'The Unlicense') {
      badge = `[![The Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)`
   } else if (data.license == 'MIT License') {
      badge = `[![MIT license](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)`     
   } else {
      return ""
   } 
}

// TODO: Create a function that returns the license section of README

function renderLicenseSection(data) {
   if (data.license) {
   let licenseFile = `${data.license.toLowerCase().split(' ').join('')}`
   console.log(licenseFile);  
   let licenseText = `[${data.license}](./assets/licenses/${licenseFile}.md)`
      licenseSection = `## License
Licensed under ${data.license}.
For more info click ${licenseText}.` 
   } else {
      return ""
   }
}
function renderSections(data) {
   if ((data.test!== undefined)&&(data.test!== "")) {
      testSection = `## Tests
      ${data.test}`
   } else {
      testSection= ""
   }
   if (data.githubOne!== undefined) {
      one = ` * ${data.githubOne} `
   } else {
      one= ""
   }
   if (data.githubTwo!== undefined) {
      two = ` * ${data.githubTwo} `
   } else {
      two= ""
   }  
   if (data.githubThree!== undefined) {
      three = ` * ${data.githubThree} `  
   } else {
      three= ""
   }
   if (data.videoname!== undefined) {
      vidLink = `![Video 1 of site](./assets/images/${data.videoname})`  
   } else {
      vidLink= ""
   }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   renderLicenseSection(data)
   renderLicenseBadge(data)
   renderSections(data)
  

  return `# ${data.title} 
   ${badge}
  ===========================================
    
  ## Description 
     ${data.description}   
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Installation 
     ${data.installation}
  ## Usage 
     ${data.usage}
![Screenshot 1 of site](./assets/images/${data.filename})
${vidLink}
  ## Credits 
   * ${data.github}
   ${one}
   ${two}
   ${three}
      
  ${testSection} 
  ## Questions 
If you have questions or feedback, please contact via ${data.github} at [https://github.com/${data.github}](https://github.com/${data.github}) or via email at ${data.email}.
${licenseSection}`
    
}

module.exports = generateMarkdown;
