let arr1 = [1, 2, 3, 4];
function calcArr(arr) {
let res = 0;
for (let elem of arr) {
    res += elem;
};
res = res / arr.length
    return res;
};
console.log(calcArr(arr1))

let arr2 = [1, 2, 3, 4, 5]
function calcArr_2(arr) {
    let res = 1;
    for (let elem of arr) {
        res *= elem;
    }
    return res;
};
console.log(calcArr_2(arr2));
 
