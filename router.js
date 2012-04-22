var path = require('path');
var url = require('url');
function route(requestUrl){
	var pathName = url.parse(requestUrl).pathname;
	if(pathName=='/'){
		pathName = '/index.md';
		}
	return realPath = 'asserts' + pathName;
}

exports.route = route;