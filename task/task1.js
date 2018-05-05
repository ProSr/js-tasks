// Task 1. createTextNode vs innerHTML vs textContent
let textTask1 = '<b>I\'m a some text',
	elementTask1 = document.createElement('div');
elementTask1.insertAdjacentText('afterbegin', textTask1);

let solution1task1 = elementTask1.cloneNode(false),
	solution2task1 = elementTask1.cloneNode(false),
	solution3task1 = elementTask1.cloneNode(false);

solution1task1.append(document.createTextNode(textTask1));
solution2task1.innerHTML = textTask1;
solution3task1.textContent = textTask1;
// Done.