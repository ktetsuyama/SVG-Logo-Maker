const { Shape, Circle, Triangle, Square } = require("../lib/shapes");

describe("Circle", () => {
	describe("render", () => {
		it("should throw an error when render is called directly", () => {
			// // arrange
			const shape = new Triangle();
			shape.setColor("blue");
			expect(shape.render()).toEqual(
				'<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
			);
		});
	});
});
