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
	render() {
		return `
		<svg version="1.1"
		width="300" height="200"
		xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />
		<circle cx="150" cy="100" r="80"  fill="${this.shapeColor}" />
		<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text></svg>`;
	}
}

class Triangle extends Shape {
	constructor(shapeColor, textColor, logoName) {
		super(shapeColor, textColor, logoName);
	}
	render() {
		return `
		<svg version="1.1"
		width="300" height="200"
		xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />
		<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
		<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text></svg>`;
	}
}

class Square extends Shape {
	constructor(shapeColor, textColor, logoName) {
		super(shapeColor, textColor, logoName);
	}
	render() {
		return `
		<svg version="1.1"
		width="300" height="200"
		xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />
		<rect = x="80" y="30" width="140" height="140" fill="${this.shapeColor}" />
		<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text></svg>`;
	}
}

module.exports = { Circle, Triangle, Square };
