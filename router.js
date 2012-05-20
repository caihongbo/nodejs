var path = require('path');
var url = require('url');

function parse(requestUrl){
	var pathName = url.parse(requestUrl).pathname;
	var route = {isStaticFile: false}	
	if(pathName.indexOf('.')>0){
		return route.isStaticFile = true;
	}
	var names = pathName.split('/');
	names.shift();
	if(names[names.length-1] == '')
	names.pop();
	if(names.length>=2){
		route.controller = names[0];
		route.action = names[1];
		return route;
	}
	else if (names.length == 1){	
		route.controller = names[0];
		route.action = "index"; 
		return route;
	}
	else{
		route.controller = "home";
		route.action = "index";
		return route;
	}
}
exports.parse = parse;
