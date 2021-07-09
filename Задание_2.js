function primeNumber(number) {
	if (number < 1000) {
		if (number > 1 && number % 2 != 0) {
			console.log('число простое');
		} else {
			console.log('число не является простым');
		}
	} else {
		console.log('вы ввели число за пределами допустимых значений');
	}
}

primeNumber(7);
primeNumber(8);
primeNumber(97);
primeNumber(1254);
