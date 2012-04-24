var path = require('path');
var url = require('url');

function parse(requestUrl){
	var pathName = url.parse(requestUrl).pathname;
	var names = pathName.split('/');
	names.shift();
	if(names[names.length-1] == '')
	names.pop();
	
	if(names.length>=2){
		return {
			controller: names[0], 
			action: names[1]
		};
	}
	else if (names.length == 1){	
		return {
			controller: names[0],
			action : "index"
		};
	}
	else{
		return {
			controller: "home",
			action: "index"
		};
	}
}
exports.parse = parse;