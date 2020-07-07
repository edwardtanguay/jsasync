const weather = require('openweather-apis');

const getTemperature = (city, cbSuccess, cbFailure) => {
	try {
		weather.setLang('de');
		weather.setCity(city);
		weather.setUnits('metric');
		weather.setAPPID('BADKEY');
		weather.getTemperature((err, temperature) => {
			if (err) {
				console.log(err);
			} else {
				console.log(`The temperature in ${city} is ${temperature}° C.`);
			}
		});
	} catch (error) {
		console.log('there was an error');
	}

}

getTemperature('Berlin');