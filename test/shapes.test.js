const {
	Shape,
	Circle,
	Triangle,
	Square,
	validateInput,
	validateColor,
} = require("../lib/shapes");

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

describe("validateInput", () => {
	it("should return an error for input with fewer than 1 character", () => {
		const noInput = [""];
		noInput.forEach((input) => {
			expect(validateInput(input)).toEqual("Please enter 1, 2, or 3 letters.");
		});
	});
	it("should return an error for input with with more than 3 characters", () => {
		const moreInput = ["kjre"];
		moreInput.forEach((input) => {
			expect(validateInput(input)).toEqual("Please enter 1, 2, or 3 letters.");
		});
	});
	it("should return true for input with 1 character", () => {
		const oneInput = ["k"];
		oneInput.forEach((input) => {
			expect(validateInput(input)).toEqual(true);
		});
	});
	it("should return true for input with 2 characters", () => {
		const twoInput = ["kr"];
		twoInput.forEach((input) => {
			expect(validateInput(input)).toEqual(true);
		});
	});
	it("should return true for input with 3 characters", () => {
		const threeInput = ["kre"];
		threeInput.forEach((input) => {
			expect(validateInput(input)).toEqual(true);
		});
	});
});

describe("validateColor", () => {
	it("should return true for valid named colors", () => {
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
		namedColors.forEach((color) => {
			expect(validateColor(color)).toEqual(true);
		});
	});
	it("should return true for valid hexadecimal colors", () => {
		const hexColors = [
			"#FFFFFF",
			"#FF0000",
			"#FFF",
			"#000000",
			"#080808",
			"#FFA500",
		];
		hexColors.forEach((color) => {
			expect(validateColor(color)).toEqual(true);
		});
	});
	it("should return an error message for invalid inputs", () => {
		const invalidInputs = ["invalid", "abcdefg"];
		invalidInputs.forEach((input) => {
			expect(validateColor(input)).toEqual(
				"Please enter a valid color name or hexadecimal value."
			);
		});
	});
});
