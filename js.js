let arr = [2, 4, 6, 8, 10];
let result = arr.some(elem => elem > 0); 
console.log(result);

let arr2 = [2, 4, 6, 8, 10];
let result2 = arr2.some((elem, index) => elem * index < 30);
console.log(result2);
