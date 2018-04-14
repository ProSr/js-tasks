/* eslint-disable no-undef, no-mixed-spaces-and-tabs */
describe("Task 1", function() {
	context("Working with prototype", function() {
		it("rabbit.jumps === true", function() {
			assert.equal(rabbit.jumps, true);
		});
		it("delete rabbit.jumps;\nrabbit.jumps === null", function() {
			delete rabbit.jumps;
			assert.equal(rabbit.jumps, null);
		});
		it("delete rabbit.jumps;\nrabbit.jumps === undefined", function() {
			delete rabbit.jumps;
			delete animal.jumps;
			assert.equal(rabbit.jumps, undefined);
		});
	});
});
describe("Task 2", function() {
	context("Searching algorithm", function() {
		it("pockets.pen should be 3 (found in table)", function() {
			assert(pockets.pen, 3);
		});
		it("bed.glasses should be 1 (found in head)", function() {
			assert(bed.glasses, 1);
		});
		it("benchmark pockets.glasses is above head.glasses ?", function() {
			function bench(f) {
				let start = Date.now();
				for (let i = 0; i < 5000000; i++) f;
				return Date.now() - start;
			}
			let pocketsGlasses = 0,
				headGlasses = 0;
			
			for (let i = 0; i < 100; i++) {
				pocketsGlasses += bench(pockets.glasses);
				headGlasses += bench(head.glasses);
			}
			assert.isAbove(headGlasses, pocketsGlasses);
		});
	});
});
describe("Task 3", function() {
	context("Why two hamsters are full?", function() {
		it("rabbit.eat === true", function() {
			assert.isTrue(rabbit2.full);
		});
	});
});
describe("Task 4", function() {
	context("Where it writes?", function() {
		it("speedy.stomach === lazy.stomach", function() {
			assert.notEqual(speedy.stomach, lazy.stomach);
		});
	});
});
