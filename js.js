let str = 'Oleg';
let res = str.slice(0) + str.slice(-1).toUpperCase();
console.log(res)

let str1 = 'Oleg';
let res1 = str1.slice(0, 2).toUpperCase() + str1.slice(2);
console.log(res1)

let str2 = 'London';
let res2 = str2.slice(0, 1).toLowerCase() + str2.slice(1);
console.log(res2)

let str3 = 'var_test_text';
console.log(str3)
let word = str3.split('_');
for (let i = 0; i <= word.length - 1; i++) {
    word[i] = word[i].slice(0, 1).toUpperCase() + word[i].slice(1);
};
str3 = word.join('');
console.log(str3)
