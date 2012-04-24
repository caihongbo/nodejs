var view = require('./../view').view;
var controller = require('./controller').controller;

function Home(){
}  
Home.prototype = controller;
 
Home.prototype.index = function(){
	var user = {name: "Lin zhixiong", age: 24}	
	this.viewData['user'] = user;
	return view;
}

Home.prototype.other = function(){
	var user = {name: "Lin zhixiong", age: 25}	
	return view;
}




exports.controller = new Home();