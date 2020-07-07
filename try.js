
try {
	nonExistentFunction();
  } catch (error) {
	console.error('ok');
	// expected output: ReferenceError: nonExistentFunction is not defined
	// Note - error messages will vary depending on browser
  }
  