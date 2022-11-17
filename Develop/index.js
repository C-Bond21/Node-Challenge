// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [ 
{
    type: "input",
    message:"Project Name?",
    name:"title",
    validate: (value)=>{if (value){return true} else {return "Value required to continue"}},
},
{
    type: "input",
    message: "How do you install app?",
    name:"installation",
    validate: (value)=>{if (value){return true} else {return "Value required to continue"}},
},
{
    type: "input",
    message: "What instructions are needed to install you app?",
    name:"instructions",
    validate: (value)=>{if (value){return true} else {return "Value required to continue"}},
},
{
    type: "input",
    message: "How is your app to be used?",
    name:"usage",
    validate: (value)=>{if (value){return true} else {return "Value required to continue"}},
},
{
    type: "input",
    message: "Are there any contributions?",
    name:"contributions",
    validate: (value)=>{if (value){return true} else {return "Value required to continue"}},
},
{
    type: "input",
    message: "What is your GitHub username?",
    name:"githubUsername",
    validate: (value)=>{if (value){return true} else {return "Value required to continue"}},
},
{
    type: "input",
    message: "What is your email?",
    name:"email",
    validate: (value)=>{if (value){return true} else {return "Value required to continue"}},
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {if (err){throw err};
    console.log("README created") });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(answers => generateMarkdown(answers))
    .then(generateReadme => writeToFile("README.md", generateReadme))
    .catch(err => {console.log(err);}
    );