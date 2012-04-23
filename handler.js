var fs = require('fs');
var path = require('path');
var url = require('url');
var Writer = require('./helper');
var exec = require('child_process').exec;
var request;
var response;

function handle(req, res, router){
	request = req;
	response = res;
	var route = router.parse(request.url);
	console.log(route);
	var controllerFile = './Controllers/' + route.controller + '.js';
	 
	path.exists(controllerFile,	 function (exists) {
			if (!exists) {
				Writer.write("asserts" + url.parse(request.url).pathname, response);
			} else {
				var controller = loadController(route);
				if(typeof controller[route.action] === 'function'){
					controller[route.action]().render(request, response, route); 
				}
				else{
					Writer.write("asserts" + url.parse(request.url).pathname, response);
				}
			}
		});
	}
	
function loadController(route){
	var controller = require('./Controllers/' + route.controller).controller;
	return  controller;
}
exports.handle = handle;