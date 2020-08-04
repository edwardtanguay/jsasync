const getPerson = function (id) {
	return new Promise((resolve, reject) => {
		const errorOccurred = Math.floor(Math.random() * 11) + 1 == 1 ? true : false;
		const seconds = (Math.floor(Math.random() * 3) + 1) * 1000;
		console.log(seconds);
		if (errorOccurred) {
			reject(`Sorry, there was some problem and so nothing can be displayed.`);
		} else {
			let persons = {
				111: {
					id: 111,
					firstName: 'Christiaan',
					lastName: 'Huygens'
				},
				222: {
					id: 222,
					firstName: 'Augustus',
					lastName: 'Pugin'
				},
				333: {
					id: 333,
					firstName: 'George',
					lastName: 'Marshall'
				},
				444: {
					id: 444,
					firstName: 'Milton',
					lastName: 'Friedman'
				}
			};
			setTimeout(() => {
				resolve(persons[id]);
			}, seconds);
		}
	});
}

Promise.all([
	getPerson(111),
	getPerson(222),
	getPerson(333),
	getPerson(444)
]).then((persons) => {
	persons.map((person) => {
		console.log(`We received ${person.firstName} ${person.lastName} (${person.id}).`);
	});
}).catch((message) => {
	console.log(message);
});


// getPerson(222).then((person) => {
// 	
// }).catch((message) => {
// 	console.log(`Error: ${message}`);
// }),