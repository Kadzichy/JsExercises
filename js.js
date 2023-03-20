function func2(obj2) {
	obj2 = '!';
}

let obj2 = {a: 1, b: 2, c: 3};
func(obj2.a);
console.log(obj2);

function func3(arr3) {
	arr3.splice(1, 1);
}

let arr3 = [1, 2, 3];
func(arr3);
console.log(arr3);

function func(arr) {
	let newArr = arr;
	newArr[0] = '!';
}
let arr = [1, 2, 3];
func(arr);
console.log(arr);
