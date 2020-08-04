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

const changeId = function (id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(id + 1);
		}, 1000);
	});
}

getPerson(222).then((person) => {
	console.log(`We received ${person.firstName} ${person.lastName} (${person.id}).`);
	return person.id;
}).then((id) => {
	changeId(id).then((newId) => {
		console.log(`Id was changed from ${id} to ${newId}.`);
	})
}).catch((message) => {
	console.log(`Error: ${message}`);
}).finally(() => {
	console.log('finished');
});