# generate-readme-md

Generates README.md for any project.

## Description

This is a node JS project. This creates a professional README.md file for the developer.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)
- [Demo](#demo)

## Installation

### Prerequisite

Node and NPM are installed in the environment where this project is downloaded and run.

### Main

Once the repository is cloned, one needs to run

```console
npm init -y
```

And you run the following command to download and include inquirer library into the environment

```console
npm install inquirer
```

## Usage

Please run the project using the following command:

```console
node index.js
```

Please note that when you run the program, there will be many prompts asking for your input.
Please provide your project's read me contents.
For the description prompt, the program will open a text editor that is configured in your system.
Using the text editor, you can type a multi-line description text.
Then when you save and exit out of the editor, the program will move on to the next prompts.

### Screenshots

Following screenshots contain a sequence that illustrates how to run the program.

![How to run](/images/001.jpg?raw=true "1")

When we start to run, as we see in the following screenshot, the program is prompting to get the title of the project, and so on.
![How to run](/images/002.jpg?raw=true "2")

As we see below, for description prompt, the program will open a text editor, so multi-line or paragraph of description text can be entered. Once we save and exit from the text editor, the program will go ot the next prompt.
![How to run](/images/003.jpg?raw=true "3")

This screenshot shows further prompts where you will enter more information about the project.
![How to run](/images/004.jpg?raw=true "4")
![How to run](/images/005.jpg?raw=true "5")

Below screenshot shows that a GENERATED_README.md file has been created in teh project folder.
![How to run](/images/006.jpg?raw=true "6")
![How to run](/images/007.jpg?raw=true "7")

For further details, please checkout the walkthrough video.

## Demo

[Walkthrough Video](https://drive.google.com/file/d/1EFOhiq98AZ6ChzHYssVlcGLDj1j1C7sY/preview)

If you cannot access the video link, please access the drive.
[Link to the drive where the video is](https://drive.google.com/drive/folders/17TdbS3oiJeFvNTJBeW5NdYFh49-HYbYe?usp=sharing)

## Credits
This project uses NPM inquirer library. 

## License

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
