let now  = new Date();
let date = new Date(1988, 1, 4, 23, 59, 59); 
let date2 = new Date(2000, 1, 10, 23, 59, 59)
let diff = date2 - date; 
console.log(diff);   

console.log(diff / (1000 * 3600 * 24));
