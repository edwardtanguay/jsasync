const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const delay = (seconds) => new Promise((resolve, reject) => {
	const errorOccurred = Math.floor(Math.random() * 4) + 1 == 1 ? true : false;
	if (errorOccurred) {
		reject({
			entity: 'error',
			severity: 'severe',
			message: 'there was an error'
		});
	} else {
		setTimeout(() => {
			resolve('finished');
		}, seconds * 1000);
	}
});

(async () => {
	console.log('111');
	try {
		console.log('waiting 1 second');
		const message = await delay(1);
		console.log('The returned message was: ' + message);
		console.log('creating file');
		await writeFile('temp004.txt', 'testing');
		console.log('waiting 4 seconds before deleting');
		await delay(4);
		await unlink('temp004.txt');
		console.log('file deleted');
	}
	catch (e) {
		console.log('ERROR: ' + e.message);
	}
	finally {
		console.log('clean up in all cases');
	}
})();


