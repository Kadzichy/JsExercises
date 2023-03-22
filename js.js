let test = function func() {
	console.log('!');
	test(); // вызываем сами себя
};

test();
