const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown.js")

const questions = [
    {
        type: "input", 
        message: 'What is the title of this project:', 
        name: 'title', 
    },
    
    {
        type: "input", 
        message: `What is the description of this project? :`,
        name: "description ",
    }, 
    {
        type: "input",
        message: 'How can a user install this application: ',
        name: "install",
    }, 
    {
        type: "input",
        message: `Add a screenshot using ![alt text](assests/images/screenshot.png): `,
        name: "screenshot"
    },
    {
        type: "input",
        message: 'what are the key features of this application? : ',
        name: "usageinfo",
    }, 
    {
        type: "input",
        message: `How can a user test the application`,
        name: "tests"
    },
    {
        type: "input",
        message: `List all collaborators and links to there Github profile`,
        name: "contributors"
    },
    {
        type: "list",
        message: `Choose a license for the application`,
        name: "license",
        choices: [`Unlicense`, `MIT`, `Apache`, `Berkeley Source Distribution (BSD)`, `Mozilla Public License (MPL)`, `Eclipse Public License (EPL)`, `GNU General Public License (GPL)`],
    },
    {
        type: "input",
        message: `Were any third-party or tutorials used that require attribution?: `,
        name: "tests"
    },
    {
        type:"imput",
        message: "What's your Github username?: ",
        name: "githubname"
    }, 
    {
        type: "input",
        message: `What's your email address?: `,
        name: "email"
    },

    {
        type: "input",
        message: `What did you learn?: `,
        name: "learn"
    },
    {
        type:"imput",
        message: "What problem does it solve?:  ",
        name: "problem"
    }, 
    {
        type: "input",
        message: `Why did you build this project?:  `,
        name: "why"
    },


    
 ]

 function writeToFile(filename, data) {

    fs.writeFile("DIST/" + filename, data, (err) => {
        if (err) {
            console.error(err);
          } else {
            console.log('README.md generated successfully!');
          }
        });
    // fs.writeFileSync(filename, data)

    // console.log("Success!")
 }

 function init(){
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data); 

        const readmecontent = generateMarkdown(data)
        
        const filename = "sampleREADME.md"
        writeToFile(filename, readmecontent)

    })
 }
 init() 


