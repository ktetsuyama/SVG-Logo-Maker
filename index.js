const fs = require("fs");
const inquirer = require("inquirer");

inquirer
	.prompt([
		{
			type: "input",
			message: "What three letters would you like for your logo?",
			name: "logoName",
		},
		{
			type: "input",
			message: "What color would you like your text to be?",
			name: "textColor",
		},
		{
			type: "list",
			message: "What shape would you like your logo to be?",
			name: "shape",
			choices: ["circle", "triangle", "square"],
		},
		{
			type: "input",
			message: "What color would you like your shape to be?",
			name: "shapeColor",
		},
	])
	.then((result) => {
		const SVGContent = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <rect width="100%" height="100%" fill="white" />
   
     <${result.shape} cx="150" cy="100" r="80" fill="${result.shapeColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${result.textColor}">${result.logoName}</text>
   
   </svg>`;
		fs.writeFile("./examples/logo.svg", SVGContent, (err) =>
			err ? console.error(err) : console.log("Generated logo.svg")
		);
	});
