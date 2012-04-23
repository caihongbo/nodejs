var fs = require('fs');
var path = require('path');
var url = require('url');
function handle(request, response){
	var realPath;
	if(request.route != null){
	    realPath = request.route(request.url);
		}
	else 
		readFile('assert/error.md');
		
}

function readFile(filePath){
	path.exists(filePath, function (exists) {
			if (!exists) {
				response.writeHead(404, {'Content-Type': 'text/plain'});
				response.write("This request URL " + filePath + " was not found on this server.");
				response.end();
			} else {
				fs.readFile(filePath, "binary", function(err, file) {
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

exports.handle = handle;