var http = require('http');
function start(router){
	http.createServer(function (request, response) {
	var path = {controller: "home",action: "index"};
	handle(path, requestion);
	response.end();
	}).listen(1337, '127.0.0.1');
}

function handle(path){
    var controller = findeController(path);
	controller[path.action]();
   }

function findeController(path){
	var controller = require('./Controllers/' + path.controller).controller;
	return  controller;
}

exports.start = start;
console.log("nodejs server is running at http://127.0.0.1:1337");