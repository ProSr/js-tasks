// Task 6. Add a closing button
function auxiliaryHTMLtask6() {
	let wrapperTask6 = document.createElement('div');
	wrapperTask6.id = 'wrapperTask6';
	wrapperTask6.innerHTML = `<style>
		body {
		  margin: 10px auto;
		  width: 470px;
		}

		h3 {
		  margin: 0;
		  padding-bottom: .3em;
		  font-size: 1.1em;
		}

		p {
		  margin: 0;
		  padding: 0 0 .5em;
		}

		.pane {
		  background: #edf5e1;
		  padding: 10px 20px 10px;
		  border-top: solid 2px #c4df9b;
		  position: relative;
		}
		
		.pane button {
		  top: 10px;
		}

		.remove-button {
		  font-size: 110%;
		  color: darkred;
		  right: 10px;
		  width: 24px;
		  height: 24px;
		  border: none;
		  background: transparent;
		  cursor: pointer;
		  position: absolute;

		}</style>The button code (may need to adjust CSS):<button class="remove-button">[x]</button><div><div class="pane"><h3>Horse</h3><p>The horse is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.</p></div><div class="pane"><h3>Donkey</h3><p>The donkey or ass (Equus africanus asinus) is a domesticated member of the horse family, Equidae. The wild ancestor of the donkey is the African wild ass, E. africanus. The donkey has been used as a working animal for at least 5000 years.</p></div><div class="pane"><h3>Cat</h3><p>The domestic cat (Latin: Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. Cats are often valued by humans for companionship and for their ability to hunt vermin.</p></div></div>`;
	document.body.prepend(wrapperTask6);
}
function solutionTask6() {
	let nodes = document.querySelectorAll('.pane');
	nodes[0].parentElement.style.position = "relative";
	function hideParrentNode(e) {
		e.path[1].hidden = true;
	}
	Array.from(nodes).forEach(n => {
		let a = wrapperTask6.firstElementChild.nextElementSibling.cloneNode(true);
		a.onclick = hideParrentNode;
		n.append(a);
	});
}
// Done.