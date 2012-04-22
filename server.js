var http = require('http');
var fs = require('fs');
var path = require('path');

function start(route){
	http.createServer(function (request, response) {
	request.route = route;
	handle(request, response);
	}).listen(1337, '127.0.0.1');
}

function handle(request, response){
	var realPath;
	if(request.route != null)
	    realPath = request.route(request.url);
	else 
		realPath = 'asserts/error.md';
	path.exists(realPath, function (exists) {
			if (!exists) {
				response.writeHead(404, {'Content-Type': 'text/plain'});
				response.write("This request URL " + realPath + " was not found on this server.");
				response.end();
			} else {
				fs.readFile(realPath, "binary", function(err, file) {
					if (err) {

						response.writeHead(500, {'Content-Type': 'text/plain'});

						response.end(err);

					} else {
						response.writeHead(200, {'Content-Type': 'text/html'});
						response.write(file, "binary");
						response.end();
					}
				});
			}
		});
}

exports.start = start;
console.log("nodejs server is running at http://127.0.0.1:1337");