var http = require('http');
var handle = require('./handler').handle;
function start(router){
	http.createServer(function (request, response) {
		request.on('end', function(){handle(request, response, router);});
	}).listen(1337, '127.0.0.1');
}

exports.start = start;
console.log("nodejs server is running at http://127.0.0.1:1337");