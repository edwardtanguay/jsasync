const getPerson = function (id) {
	return new Promise((resolve, reject) => {
		const errorOccurred = Math.floor(Math.random() * 2) + 1 == 1 ? true : false;
		if (errorOccurred) {
			reject(`Sorry, person not found with id ${id}.`);
		} else {
			const person = {
				id: id,
				firstName: 'Christiaan',
				lastName: 'Huygens'
			};
			setTimeout(() => {
				resolve(person);
			}, 1000);
		}
	});
}

getPerson(222).then((person) => {
	console.log(`We received ${person.firstName} ${person.lastName} (${person.id}).`);
}).catch((message) => {
	console.log(`Error: ${message}`);
});