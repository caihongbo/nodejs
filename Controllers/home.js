var view = require('./../view').view;
var exec = require("child_process").exec;

function Home(){

}

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }
  
Home.prototype ={
	index: function(){


	return view;
	}
}

exports.controller = new Home();