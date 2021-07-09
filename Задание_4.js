function EnumerationInterval(x, y) {
	let SetInterval = setInterval(() => {
		if (x <= y) {
			console.log(x);
			x++;
		} else {
			clearInterval(SetInterval);
		}
	}, 1000);
}

EnumerationInterval(4, 15);
