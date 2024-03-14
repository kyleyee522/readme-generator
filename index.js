const inquirer = require('inquirer');
const fs = require('fs');

let readme;
let license;

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
	.then((response) => {
		if (response.license === 'IBM') {
			license = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
		} else if (response.license === 'ISC') {
			license = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
		} else if (response.license === 'MIT') {
			license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
		}

		readme = `
${license}

# ${response.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

*   ${response.description}

## Installation

*   ${response.installation}

## Usage

*   ${response.usage}

## Contributing

*   ${response.guidelines}

## Tests

*   ${response.test}

## Questions
Any questions? Reach out:

*   GitHub: https://github.com/${response.username}

*   Email: ${response.email}
`;

		fs.writeFile('./output/README.md', readme, (err) => {
			err ? console.error(err) : console.log('File Created!');
		});
	});
