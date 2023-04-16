let elem1 = document.querySelector("#elem1");
let length = elem1.classList.length;
console.log(length);

let elem2 = document.querySelector("#elem2");
let class1 = elem2.classList;
for (let classItem of class1) {
    console.log(classItem)
}

let elem3 = document.querySelector("#elem3");
elem3.classList.add('xxx');
let class2 = elem3.classList;
console.log(class2)

let elem4 = document.querySelector("#elem4");
elem4.classList.remove('www', 'zzz');
let class3 = elem4.classList;
console.log(class3)

let elem5 = document.querySelector("#elem5");
let contains = elem5.classList.contains('ggg');
    console.log(contains);
