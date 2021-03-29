// TODO: Create a function that returns a license badge based on which license is passed in

let badge;
let licenseSection;
let testSection;
let one;
let two;
let three;
let covenant;
let vidLink;
let invite;


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
   let licenseText = `[${data.license}](./assets/licenses/${licenseFile}.md)`
      licenseSection = `## License
This project is licensed under ${data.license}.
For more info click ${licenseText}.` 
   } else {
      return ""
   }
}
function renderSections(data) {
   if (data.test) {
      testSection = `## Tests
      ${data.testing}`
   } else {
      testSection= ""
   }
   if (data.githubOne!== undefined) {
      one = ` * ${data.githubOne}: [https://github.com/${data.githubOne}](https://github.com/${data.githubOne})`
   } else {
      one= ""
   }
   if (data.githubTwo!== undefined) {
      two = ` * ${data.githubTwo}: [https://github.com/${data.githubTwo}](https://github.com/${data.githubTwo})`
   } else {
      two= ""
   }  
   if (data.githubThree!== undefined) {
      three = ` * ${data.githubThree}: [https://github.com/${data.githubThree}](https://github.com/${data.githubThree})`  
   } else {
      three= ""
   }
   if (data.videoname!== undefined) {
      vidLink = `![Video 1 of site](./assets/images/${data.videoname})`  
   } else {
      vidLink= ""
   }
   if (data.contribution) {
      invite = `${data.invite}`
   } else {
      invite =""
   }
   if (data.covenant) {
      covenant = `Please adhere to the [Contributor Covenant Code of Conduct](./assets/licenses/contributor-covenant.md)`
   } else {
      covenant =""
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
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Installation 
   ${data.installation}
  ## Usage 
   ${data.usage}
![Screenshot 1 of site](./assets/images/${data.filename})
${vidLink}
  ## Contributions 
  This was created by:
   * ${data.github}: [https://github.com/${data.github}](https://github.com/${data.github})
   ${one}
   ${two}
   ${three}
${invite}
${covenant}       
  ${testSection} 
  ## Questions 
   If you have questions or feedback, please contact via ${data.github} at [https://github.com/${data.github}](https://github.com/${data.github}) or via email at ${data.email}.
${licenseSection}`

}

module.exports = generateMarkdown;
