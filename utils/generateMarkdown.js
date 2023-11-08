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
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description
  - ${data.why}
  - ${data.problem}
  - ${data.learn}

  ## Table of Contents

  -[License](#license)
  -[Installation](#installation)
  -[usage](#usage)
  -[Features](#features)
  -[Credits](#contributors & credit)
  -[Tests](#tests)
  -[Questions](#questions)
  -[How to contribute](#how to contribute)

  ##License 

  -${renderLicenseLink(data.license)}

  Refer to [https://choosealicense.com/](https://choosealicense.com).

  ##Installion 

  ![alt text](assets/images/screenshots.png)

  ##Features 

  - ${data.features}

  ## Contributors & Credit 

    - ${data.contributors}
    - ${data.thirdparty}

  ## Tests 
    -  ${data.test}

    ## Questions 
    If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my at [${data.github}](https://github.com/${data.github}/). 

    ## How to Contribute 

    - ${data.contribute}
    The [contributor Convenant](https://www.contributor-convenant.org) is an industry standart, but you can always write your own if you'd prefer.


`;
}

module.exports = generateMarkdown;
