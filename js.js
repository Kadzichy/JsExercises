let arr = [...'12345'];
console.log(arr);

let arr1 = ['a', ...'12345'];
console.log(arr1);

let arr2 = [...'12345', ...'56789'];
console.log(arr2);

let arr3 = ['a', 'b', 'c'];
let arr4 = [...arr3, ...'12345'];
console.log(arr4);
