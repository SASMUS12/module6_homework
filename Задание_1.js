//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

function typeDeterminant() {
	const inputValue = prompt('Введите число');

	const value = +inputValue;

	if (typeof value == 'number' && !isNaN(value)) {
		if (value == 0) {
			console.log('ноль');
		} else if (value % 2 == 0) {
			console.log('чётное');
		} else {
			console.log('нечётное');
		}
	} else {
		console.log('Упс, кажется, вы ошиблись');
	}
}
typeDeterminant();
