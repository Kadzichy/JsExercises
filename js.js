let arr = [];
for (let i = 1; i <= 10; i++) {
	arr.push(i);
}
console.log(arr);

let arr1 = [];
for (let i = 1; i <= 10; i++) {
	arr1.push('x');
}
console.log(arr1);

let arr3 = [-1, -9, 3, -5, 4, -6, 8, 1];
let newArr = [];
for (let key in arr3) {
    if (arr3[key] > 0) {
        newArr.push(arr3[key]);
    } else {
        continue;
    }
}
console.log(arr3); 
console.log(newArr);
