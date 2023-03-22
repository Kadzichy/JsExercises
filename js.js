function func1() {
	return function() {
		return 1;
	};
}
function func2() {
	return function() {
		return 2;
	};
}
console.log(func1()() + func2()())

function func() {
	return function() {
		return function() {
            return function(){
                return function(){
			return '!';
                };
            };
		};
	};
}
console.log(func()()()()())
