!function() {
	console.log('!');
}();

+function() {
	console.log('!');
}();

let result = function() {
	return '!';
}();
console.log(result);

let result1 = function() {
	return '!';
};
console.log(result1);

let result2 = function() {
	return '!';
};
console.log(result2())
