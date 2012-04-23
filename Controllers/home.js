var view = require('./../view').view;

function Home(){
}

Home.prototype ={
	index: function(){
	return view;
	}
}

exports.controller = new Home();