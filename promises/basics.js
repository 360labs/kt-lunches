var resolved = Promise.resolve(202);		// Creates a resolved promise with value 202
var rejected = Promise.reject('error');		// Creates a rejected promise

var customPromise = new Promise((resolve,reject) => {
	// call resolve() or reject()
});