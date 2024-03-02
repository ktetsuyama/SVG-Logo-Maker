const fs = require("fs");
const inquirer = require("inquirer");
const {
	Circle,
	Triangle,
	Square,
	validateInput,
	validateColor,
} = require("./lib/shapes");

inquirer
	.prompt([
		{
			type: "input",
			message: "What three letters would you like for your logo?",
			name: "logoName",
			validate: validateInput,
		},
		{
			type: "input",
			message:
				"What color would you like your text to be? You may enter a color by word (red, orange, yellow, green, blue, purple, black, white) or by hexadecimal.",
			name: "textColor",
			validate: validateColor,
		},
		{
			type: "list",
			message: "What shape would you like your logo to be?",
			name: "shape",
			choices: ["circle", "triangle", "square"],
		},
		{
			type: "input",
			message:
				"What color would you like your shape to be? You may enter a color by word (red, orange, yellow, green, blue, purple, black, white) or by hexadecimal.",
			name: "shapeColor",
			validate: validateColor,
		},
	])
	.then((result) => {
		console.log(result.shape);
		let shape;
		if (result.shape === "circle") {
			shape = new Circle(result.shapeColor, result.textColor, result.logoName);
		}
		if (result.shape === "triangle") {
			shape = new Triangle(
				result.shapeColor,
				result.textColor,
				result.logoName
			);
		}
		if (result.shape === "square") {
			shape = new Square(result.shapeColor, result.textColor, result.logoName);
		}
		fs.writeFile("./examples/logo.svg", shape.render(), (err) =>
			err ? console.error(err) : console.log("Generated logo.svg")
		);
	});
