let container = document.querySelector('#container');
container.addEventListener('click', function(event) {
	if (event.target.tagName === 'LI') {
		event.target.innerHTML += '!';
	} else if (event.target.tagName === 'UL') {
		let newLi = document.createElement('li');
		newLi.innerHTML = 'New item';
		event.target.appendChild(newLi);
	}
});
}
