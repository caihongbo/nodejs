var fs = require('fs');
var path = require('path');
var url = require('url');
var Writer = require('./helper');
var exec = require('child_process').exec;
var request;
var response;
var ControllersFolder = './Controllers/';
function handle(req, res, router){
	request = req;
	response = res;
	var route = router.parse(request.url);
	console.log(route);
	if(route.isStaticFile === true)
    	        Write.write(url.parse(request.url).pathname, response);
	else{
		var controllerFile = ControllersFolder + route.controller + '.js';
		path.exists(controllerFile, function (exists) {
		if (!exists) {
			Writer.write(url.parse(request.url).pathname, response);
		} else {
			var controller = loadController(route);
			if(typeof controller[route.action] === 'function'){
				controller[route.action]().render(request, response, route, controller.viewData); 
			}
			else{
				Writer.write(url.parse(request.url).pathname, response);
			}
		}
	});
	}
}

function loadController(route){
	var controller = require(ControllersFolder + route.controller).controller;
	return  controller;
}
exports.handle = handle;
