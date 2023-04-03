let arr1 = [2, 4, 6, 8, 10];
let result1 = arr1.every((elem) => elem > 0);
console.log(result1);

let arr2 = [2, 4, 6, 8, 10];
let result2 = arr2.every((elem, index) => elem * index < 30);
console.log(result2);
