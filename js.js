let arr = ['a', 'b', 'c', 'd'];
let flag = false;
for (let elem of arr) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}
if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

let arr1 = [1, 2, 3, 4];
let flag1 = false;
for (let elem of arr1) {
	if (elem % 2 == 0) {
		flag1 = true;
		break;
	}
}
if (flag1 === true) {
	console.log('+++');
} else {
	console.log('---');
}
