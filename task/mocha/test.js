/* eslint-disable no-undef */
describe("Task 1", function() {
    context("Load images with a callback (we don't now how to test asynchronous functions)", function() {
        it('check \'preloadImages\' function', function() {
			let preloadImages = solutionTask1();
			
			let sources = [
			  "https://en.js.cx/images-load/1.jpg",
			  "https://en.js.cx/images-load/2.jpg",
			  "https://en.js.cx/images-load/4.jpg",
			  "https://en.js.cx/images-load/3.jpg"
			];

			for (let i = 0; i < sources.length; i++) {
			  sources[i] += '?' + Math.random();
			}

			function testLoaded() {
			  let widthSum = 0;
			  for (let i = 0; i < sources.length; i++) {
				let img = document.createElement('img');
				img.src = sources[i];
				widthSum += img.width;
			  }
			  alert(widthSum);

			}
			
			preloadImages(sources, testLoaded);
			
			assert(false);
        });
    });
});