const inquirer = require('inquirer');
const fs = require('fs');

let readme;

inquirer
	.prompt([
		{
			type: 'input',
			message: 'What is your project title?',
			name: 'title',
		},
		{
			type: 'input',
			message: 'What is your project description?',
			name: 'description',
		},
		{
			type: 'input',
			message: "Please enter your project's installation instructions:",
			name: 'installation',
		},
		{
			type: 'input',
			message: "Please enter your project's usage information:",
			name: 'usage',
		},
		{
			type: 'input',
			message: "Please enter your project's contribution guidelines:",
			name: 'guidelines',
		},
		{
			type: 'input',
			message: "Please enter your project's test instructions:",
			name: 'test',
		},
		{
			type: 'list',
			message: 'Which license does you application use?',
			name: 'license',
			choices: ['IBM', 'ISC', 'MIT'],
		},
		{
			type: 'input',
			message: 'What is your GitHub username?',
			name: 'username',
		},
		{
			type: 'email',
			message: 'What is your email?',
			name: 'email',
		},
	])
	.then((response) => {});
