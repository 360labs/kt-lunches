function timer(ms,value=null) {
	return new Promise((resolve,reject) => {
		setTimeout(() => resolve(value), ms);
	});
}

// Create an array of 10 items
var items = Array.from({length:10}).map((u,i) => i*10);

// The function that will be run for each item in items
var timerFunc = function(item,i) {
	console.log('timerFunc: item=%j, i=%j', item,i);
	return timer(100,i).then(() => {
		console.log('Timer %j done', i);
		return 1 + i;
	});
}


// Run items in serial through timerFunc and console out the results
serialPromise(items, timerFunc).then(console.log,console.error);



function serialPromise(items,func) {
	var results = [];
	var i = 0;
	return items.reduce((promise,item) => {
		return promise.then(() => func(item,i++)).then(r => results.push(r));
	}, Promise.resolve()).then(() => results);
}