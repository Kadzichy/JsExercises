console.log(Math.pow(2, 10));

console.log(Math.sqrt(245));

let arr = [4, 2, 5, 19, 13, 0, 10];
let result = 0;
for (let item of arr) {
    result += (Math.pow(item, 3));
}
console.log(Math.sqrt(result));

let num = 245;
let result1 = Math.round(Math.sqrt(num));
console.log(result1);
let result2 = Math.sqrt(num);
console.log(result2.toPrecision(3));
let result3 = Math.sqrt(num);
console.log(result3.toPrecision(4));

let num1 = 587;
let obj = {
        floor: null,
        ceil: null,
    }
let result4 = Math.sqrt(num1)
obj.floor = Math.floor(result4);
let result5 = Math.sqrt(num1);
obj.ceil = Math.ceil(result5);
console.log(obj)

console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100))

let newArr = [];
for (let i = 1; i <= 10; i++) {
    newArr.push(getRandomInt(1, 1000));
};
console.log(newArr)

let a = -1, b = -1;
console.log(Math.abs(a - b))
