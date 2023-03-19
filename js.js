let str = 'js';
console.log(str.toUpperCase());

let str2 = 'JS';
console.log(str2.toLowerCase());

let str3 = 'я учу javascript!';
let a1 = str3.substr(2, 3);
let a2 = str3.substr(6, 10);
console.log(a1, a2);
let b1 = str3.substring(2, 5);
let b2 = str3.substring(6, 16);
console.log(b1, b2);
let c1 = str3.slice(2, 5);
let c2 = str3.slice(6, 16);
console.log(c1, c2);

let str4 = 'abcde';
console.log(str4.indexOf('c'));

let str5 = 'abcde';
if (str5.indexOf('a') >= 0) {
        console.log('true')
} else {
        console.log('false')
};
