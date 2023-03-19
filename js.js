let arr = [2, 4, 6];
function func(ar1) {
for (let elem of arr1) {
    if (elem % 2 != 0) {
        return false;
    }
};
    return true;
};
if (func(arr)) {
    console.log('Все числа в массиве четные');
} else {
    console.log('В массиве есть нечетные числа')
}
