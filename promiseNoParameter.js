const getPerson = new Promise((resolve, reject) => {
	const errorOccurred = Math.floor(Math.random() * 2) + 1 == 1 ? true : false;
	if (errorOccurred) {
		reject('Sorry, person not found.')
	} else {
		const person = {
			id: 3423,
			firstName: 'Christiaan',
			lastName: 'Huygens'
		};
		setTimeout(() => {
			resolve(person);
		}, 1000);
	}
})

getPerson.then((person) => {
	console.log(`We received ${person.firstName} ${person.lastName} (${person.id}).`);
}).catch((message) => {
	console.log(`Error: ${message}`);
});