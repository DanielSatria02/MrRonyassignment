function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

let belremover = prompt("Enter a word that has bel: ");

console.log(remove_first_occurrence(belremover, 'bel'));
