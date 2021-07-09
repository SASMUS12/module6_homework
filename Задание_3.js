function sum(meaning1) {
	return function (meaning2) {
		return meaning1 + meaning2;
	};
}
let sumTwo = sum(6);
console.log(sumTwo(8));
