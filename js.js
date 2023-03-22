function each(arr, callback) {
let result = each([1, 2, 3, 4, 5], 
	function(num) { 
	return num * 2;
});
console.log(result);
}
