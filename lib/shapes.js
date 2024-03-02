class Shape {
	constructor(shapeColor, textColor, logoName) {
		this.shapeColor = shapeColor;
		this.textColor = textColor;
		this.logoName = logoName;
	}
}

class Circle extends Shape {
	constructor(shapeColor, textColor, logoName) {
		super(shapeColor, textColor, logoName);
	}
	renderCircleColor() {
		return `<circle cx="150" cy="100" r="80"  fill="${this.shapeColor}" />`;
	}
	renderTextColor() {
		return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">`;
	}
	renderLogoName() {
		return `${this.logoName}</text>`;
	}
	render() {
		return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />${this.renderCircleColor()}${this.renderTextColor()}${this.renderLogoName()}</svg>`;
	}
}

class Triangle extends Shape {
	constructor(shapeColor, textColor, logoName) {
		super(shapeColor, textColor, logoName);
	}
	renderTriangleColor() {
		return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
	}
	renderTextColor() {
		return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">`;
	}
	renderLogoName() {
		return `${this.logoName}</text>`;
	}
	render() {
		return `
		<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />${this.renderTriangleColor()}${this.renderTextColor()}${this.renderLogoName()}</text></svg>`;
	}
}

class Square extends Shape {
	constructor(shapeColor, textColor, logoName) {
		super(shapeColor, textColor, logoName);
	}
	renderSquareColor() {
		return `<rect = x="80" y="30" width="140" height="140" fill="${this.shapeColor}" />`;
	}
	renderTextColor() {
		return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">`;
	}
	renderLogoName() {
		return `${this.logoName}</text>`;
	}
	render() {
		return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />${this.renderSquareColor()}${this.renderTextColor()}${this.renderLogoName()}</text></svg>`;
	}
}

function validateInput(input) {
	if (input.length < 1 || input.length > 3) {
		return "Please enter 1, 2, or 3 letters.";
	}
	return true;
}

function validateColor(input) {
	const namedColors = [
		"red",
		"green",
		"blue",
		"black",
		"gray",
		"purple",
		"yellow",
		"orange",
		"white",
	];
	const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

	if (namedColors.includes(input)) {
		return true;
	} else if (hexColorRegex.test(input)) {
		return true;
	}

	return "Please enter a valid color name or hexadecimal value.";
}

module.exports = { Circle, Triangle, Square, validateInput, validateColor };
