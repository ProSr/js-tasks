// Task 7. Create a calendar
function addAuxiliaryElementsTask7(number = 1) {
	let styles = '<style id = "styleTask7">table {border-collapse: collapse;}td,th {border: 1px solid black;padding: 3px;text-align: center;}th {font-weight: bold;background-color: #E6E6E6;}</style>';
	return function(name) {
		if(number--) {
			document.body.insertAdjacentHTML('beforeEnd', styles);
		}
		document.body.insertAdjacentHTML('beforeEnd', '<div id=' + name + '></div>');
	}
}
function createCalendar1task7(elem, year, month) {
	let table = '<table>',
		days = new Date(year, month).getDay() - 1,
		monthDays = new Date(year, month + 1, -1).getDate(),
		weeks = (days + monthDays + 1) / 7;
	if(!Number.isInteger(weeks)) weeks = Math.trunc(weeks) + 1;
	let	k = 0,
		j = days,
		jj = weeks * 7 - days - monthDays - 1;
	
	
	table += '<tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr>';
	
	for(let i = 0; i < weeks; i++) {
		table += '<tr>';
		while(j) {
			table += '<td></td>';
			j--;
		}
		for(let l = 0 + days; l <= 6; l++) {
			if(k++ <= monthDays) table += '<td>' + k + '</td>';
			else break;
			days = 0;
		}
	}
	while(jj) {
		table += '<td></td>';
		jj--;
	}
	table += '</tr>';
	elem.insertAdjacentHTML('afterBegin', table + '</table>');
}
function createCalendar2task7(elem, year, month) {
	elem.insertAdjacentHTML('afterBegin', '<table><tbody><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr><tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr><tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr></tbody></table>');
}
// Done.