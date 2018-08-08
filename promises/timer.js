// returns a Promise that resolves after ms milliseconds and resolves with value.
function timer(ms,value=null) {
	return new Promise((resolve,reject) => {
		setTimeout(() => resolve(value), ms);
	});
}

timer(1000, 'Timer 1 done').then(console.log,console.error);
timer(500,  'Timer 2 done').then(console.log,console.error);
timer(100,  'Timer 3 done').then(console.log,console.error);
