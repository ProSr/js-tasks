// Task 1. Endless page
function solutionTask1() {
	
	function preloadImages(sources, callback) {
/* // solution with 'for' loop
		for(let i = 0; i < sources.length; i++) {
			let img = document.createElement('img');
			img.src = sources[i];
			img.onerror = img.onload = checkCountImg;
		}
*/ 
		sources.forEach(i => {
			let img = document.createElement('img');
			img.src = i;
			img.onerror = img.onload = checkCountImg;
		});
		
		
		let countLoadedImg = 0;
		function checkCountImg() {
				if(++countLoadedImg === sources.length) callback();
		}
    }
	return preloadImages;
}
// Done.