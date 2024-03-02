const { Shape, Circle, Triangle, Square } = require("../lib/shapes");

describe("Circle", () => {
	describe("shapeColor", () => {
		it("should create a circle that is blue in color", () => {
			const shape = new Circle("blue");
			shape.shapeColor = "blue";
			expect(shape.renderCircleColor()).toEqual(
				'<circle cx="150" cy="100" r="80"  fill="blue" />'
			);
		});
	});
});

describe("Circle", () => {
	describe("textColor", () => {
		it("should color the text blue", () => {
			const shape = new Circle("blue");
			shape.textColor = "blue";
			expect(shape.renderTextColor()).toEqual(
				'<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">'
			);
		});
	});
});

describe("Circle", () => {
	describe("logoName", () => {
		it("should create the text was chosen", () => {
			const shape = new Circle("SVG");
			shape.logoName = "SVG";
			expect(shape.renderLogoName()).toEqual(`SVG</text>`);
		});
	});
});

describe("Triangle", () => {
	describe("shapeColor", () => {
		it("should create a triangle that is blue in color", () => {
			const shape = new Triangle("blue");
			shape.shapeColor = "blue";
			expect(shape.renderTriangleColor()).toEqual(
				'<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
			);
		});
	});
});

describe("Triangle", () => {
	describe("textColor", () => {
		it("should color the text blue", () => {
			const shape = new Triangle("blue");
			shape.textColor = "blue";
			expect(shape.renderTextColor()).toEqual(
				'<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">'
			);
		});
	});
});

describe("Triangle", () => {
	describe("logoName", () => {
		it("should create the text was chosen", () => {
			const shape = new Triangle("SVG");
			shape.logoName = "SVG";
			expect(shape.renderLogoName()).toEqual(`SVG</text>`);
		});
	});
});

describe("Square", () => {
	describe("shapeColor", () => {
		it("should create a square that is blue in color", () => {
			const shape = new Square("blue");
			shape.shapeColor = "blue";
			expect(shape.renderSquareColor()).toEqual(
				'<rect = x="80" y="30" width="140" height="140" fill="blue" />'
			);
		});
	});
});

describe("Square", () => {
	describe("textColor", () => {
		it("should color the text blue", () => {
			const shape = new Square("blue");
			shape.textColor = "blue";
			expect(shape.renderTextColor()).toEqual(
				'<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">'
			);
		});
	});
});

describe("Square", () => {
	describe("logoName", () => {
		it("should create the text was chosen", () => {
			const shape = new Square("SVG");
			shape.logoName = "SVG";
			expect(shape.renderLogoName()).toEqual(`SVG</text>`);
		});
	});
});
