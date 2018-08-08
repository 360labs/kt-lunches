// Promises can be chained
var promise = Promise.resolve(5);	// Start with a value of 5
promise
	.then(v => v*5)					// Multiply it by 5
	.then(v => v+5)					// Add 5
	.then(console.log);				// Output the result


