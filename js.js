window.onload = function() {
    list.addEventListener('click', function(event) {
	event.target.innerHTML = event.target.innerHTML 
		+ '!'; 
});

list.addEventListener('click', function(event) {
	let li = event.target.closest('li');
	if (li) {
		li.innerHTML = li.innerHTML + '!';
	}
});
}
