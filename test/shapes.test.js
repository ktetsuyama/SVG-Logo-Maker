const { Shape, Circle, Triangle, Square } = require("../lib/shapes");

describe("Circle", () => {
	describe("shapeColor", () => {
		it("should throw an error when render is called directly", () => {
			const shape = new Triangle();
			this.shapeColor = "blue";
			expect(shape.render()).toEqual(
				'<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
			);
		});
	});
});
