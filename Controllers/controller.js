var view = require('./../view').view;
var exec = require("child_process").exec;

function Controller(){
	this.viewData = {};
}

exports.controller = new Controller();

