let arr1 = [1, 2, 3, 4, 5,6]
function sumArr(arr) {
let res = 0;
for (let elem of arr) {
    res += elem;
};
return res;
};
console.log(sumArr(arr1));

let num2 = 16;
let newArr2 = [];
function getDivider(number) {
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        newArr2.push(i)
    } else {
        continue;
    };
};
    return newArr2;
};
console.log(getDivider(num2));
