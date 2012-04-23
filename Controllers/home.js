function Home(){
}

Home.prototype ={
	index: function(){
	console.log('hi guy');
	}
}
exports.controller = new Home();