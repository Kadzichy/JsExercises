let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let mainArr of arr) {
    for (let elem of mainArr) {
        sum += elem
    };
};
console.log(sum)

let arr1 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]; 
let sum1 = 0;
for (let mainArr of arr1) {
    for (let SubMainArr of mainArr) {
        for (let SubSubMainArr of SubMainArr) {
            sum1 += SubSubMainArr
        };
    };
};
