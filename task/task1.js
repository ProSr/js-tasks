// Task 1. Search for elements
function makeHTMLtask1(form) {
	if(arguments.length > 1) {
		document.body.removeChild(form);
	} else {
	form.innerHTML = '<form name="search"> <label>Search the site: <input type="text" name="search"> </label> <input type="submit" value="Search!"> </form> <hr> <form name="search-person"> Search the visitors: <table id="age-table"> <tr> <td>Age:</td> <td id="age-list"> <label> <input type="radio" name="age" value="young">less than 18</label> <label> <input type="radio" name="age" value="mature">18-50</label> <label> <input type="radio" name="age" value="senior">more than 50</label> </td> </tr> <tr> <td>Additionally:</td> <td> <input type="text" name="info[0]"> <input type="text" name="info[1]"> <input type="text" name="info[2]"> </td> </tr> </table> <input type="submit" value="Search!"> </form>';
	form.setAttribute("id", "form");
	document.body.prepend(form);
	}
}
// Done

