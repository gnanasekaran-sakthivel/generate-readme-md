// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs, { write } from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter the title of the project",
    name: "title",
  },
  {
    type: "editor",
    message: "Enter the description of the project",
    name: "description",
    waitUserInput: true,
  },
  {
    type: "input",
    message: "Enter any installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter any usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter credits",
    name: "credits",
  },
  {
    type: "input",
    message: "Enter test instructions if any",
    name: "test",
  },
  {
    type: "list",
    message: "Enter the license type",
    name: "license",
    choices: ["MIT", "ISC", "GPL"],
  },
  {
    type: "input",
    message: "Enter name",
    name: "username",
  },
  {
    type: "input",
    message: "Enter email",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
