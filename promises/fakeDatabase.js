getCustomers().then(console.log);


function getCustomers() {
	return timer(100, [
		{id:1, name:'Bob S',	email:'bob@bob.co'},
		{id:2, name:'Sally B',	email:'sally@ex.co'},
		{id:3, name:'Mike R',	email:'mike@ex.co'}
	]);
}

function getOrders() {
	return timer(200, [
		{id:101, customerId:1, total:52.44},
		{id:102, customerId:2, total:17.90},
		{id:103, customerId:3, total:81.28},
		{id:104, customerId:3, total:49.14},
		{id:105, customerId:2, total:39.21},
		{id:106, customerId:1, total:50.19}
	]);
}

function getOrderItems(orderId) {
	return timer(50, [
		{id:201, orderId:orderId, sku:'A3321'},
		{id:202, orderId:orderId, sku:'A7091'},
		{id:203, orderId:orderId, sku:'A1799'}
	]);
}


// returns a Promise that resolves after ms milliseconds and resolves with value.
function timer(ms,value=null) {
	return new Promise((resolve,reject) => {
		setTimeout(() => resolve(value), ms);
	});
}
