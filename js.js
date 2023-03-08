for (i = 1; i<=100; i++) {
    if(i%2==0){
    console.log(i);
    }
}

let str = '';
for (let i = 0; i < 10; i++) {
	str += 'x';
}
console.log(str);

let arr2 = [];

for (let i = 1; i <= 10; i++) {
	arr2.push(i);
}
console.log(arr2);

let arr = [1,2,3,4,5,6,7,8,9,11,121,13,1232];
let flag = false;
for (let elem of arr) {
	if (elem == 5) {
		flag = true;
		break;
	}
}
if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}
