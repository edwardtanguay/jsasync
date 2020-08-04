const delay = (ms) => {
	const startPoint = new Date().getTime();
	while (new Date().getTime() - startPoint <= ms) {
		//wait
	}
};


console.log('before');
delay(2000)
console.log('after');