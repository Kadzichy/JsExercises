let arr = [1, 2, 3];
let arr1 = arr;
arr1[0] = 'a';
console.log(arr1)

let arr2 = [1, 2, 3];
let arr3 = arr2;
arr2[0] = 'a';
arr3[1] = 'b';
console.log(arr2);

let arr4 = [1, 2, 3];
let arr5 = arr4;
arr4[0] = 'a';
arr5[0] = 'b';
console.log(arr5);
