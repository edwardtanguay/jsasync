const prom1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('the result')
	}, 1000);
});

prom1.then((value) => {
	console.log(value);
});

//console.log('promise: ', prom1);

setTimeout(() => {
	console.log('promise again: ', prom1);
}, 1500);