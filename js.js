const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = arr.filter((elem, index) => elem * index <= 30);
console.log(result);

const arr1 = [1, 2, [3, 4], 5, [6, 7]];
const newarr1 = [];
let result1 = arr1.filter(function (elem) {
    if (typeof elem !== "object") {
        newarr6.push(elem);
    }
});
console.log(newarr1);

const arr2 = [-1, 2, -3, -25, 30];
let count = 0;
let result2 = arr2.filter((elem) => {
    if (elem < 0) {
        count++;
    }
});
console.log(count);
