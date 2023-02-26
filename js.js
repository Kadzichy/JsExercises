let test1 = true;
let test2 = true;
if (!test1 && !test2) { 
	console.log('+++');
} else {
	console.log('---');
}

let test3 = true;
let test4 = true;
let test5 = true;
if (test3 || test4 && test5) { 
	console.log('+++');
} else {
	console.log('---');
}
