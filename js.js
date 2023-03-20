function func() {
	return 'alec';
}
console.log(func());
console.log(func);

func = 123; // затрем переменную func
console.log(func); 

function func1() {
	return 3;
}
let func2 = func1;
console.log(func1() + func2());
