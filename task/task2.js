// Task 2. Catch links in the element
function auxiliaryHTMLtask2() {
	let divTask2 = document.createElement('div');
	divTask2.id = 'divTask2';
	divTask2.innerHTML = `<style>
		#contents {
		  padding: 5px;
		  border: 1px green solid;
		}
	</style>`;
	divTask2.innerHTML += `<fieldset id="contents"><legend>#contents</legend><p>How about to read <a href="http://wikipedia.org">Wikipedia</a> or visit <a href="http://w3.org"><i>W3.org</i></a> and learn about modern standards?</p></fieldset>`;
	document.body.prepend(divTask2);
}
function solutionTask2() {
	contents.onclick = function(event) {

      function handleLink(href) {
        let isLeaving = confirm(`Leave for ${href}?`);
        if (!isLeaving) return false;
      }

      let target = event.target.closest('a');

      if (target && contents.contains(target)) {
        return handleLink(target.getAttribute('href'));
      }
    };

/* //My Solution
	contents.addEventListener('click', stopGoingAway);
	function stopGoingAway(event) {
// Solution Number 2
//		let a = event.target.closest('a');
//		if(a && contents.contains) {
//			let action = confirm(`ВНИМАНИЕ!\nВы переходите по внешней\nссылке: ${a.getAttribute('href')}\nОтмените действие\nчтобы остаться на сайте.`);
//			if(!action) event.preventDefault();
//		}

// Solution Number 1
//		for(let node of event.path) {
//			if(node === contents) {
//				break;
//			}
//			if(node.hasAttribute('href')) {
//				let action = confirm(`ВНИМАНИЕ!\nВы переходите по внешней\nссылке: ${node.getAttribute('href')}\nОтмените действие\nчтобы остаться на сайте.`);
//				if(!action) event.preventDefault();
//				break;
//			}
//		}
	};
*/
}
// Done.