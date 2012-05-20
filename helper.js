var path = require('path');
var fs = require('fs');
function readFile(realPath, response){
	if(realPath.indexOf('/')===0){
		realPath = realPath.substring(1,realPath.length);
	}
	path.exists(realPath, function (exists) {
		if (!exists) {
			response.writeHead(404, {'Content-Type': 'text/plain'});
			response.write("This request URL " + realPath + " was not found on this server.");
			response.end();
		} else {
			fs.readFile(realPath, "binary", function(err, file) {
				if (err) {
					response.writeHead(500, {'Content-Type': 'text/plain'});
					response.end("error message");
				} else {

					var extension = path.extname(realPath);
					response.writeHead(200, {'Content-Type': contentTypes[extension]});
					response.write(file, "binary");
					response.end();
				}
			});
		}
	});
}

var contentTypes = {
  ".aiff": "audio/x-aiff",
  ".arj": "application/x-arj-compressed",
  ".asf": "video/x-ms-asf",
  ".asx": "video/x-ms-asx",
  ".au": "audio/ulaw",
  ".avi": "video/x-msvideo",
  ".bcpio": "application/x-bcpio",
  ".ccad": "application/clariscad",
  ".cod": "application/vnd.rim.cod",
  ".com": "application/x-msdos-program",
  ".cpio": "application/x-cpio",
  ".cpt": "application/mac-compactpro",
  ".csh": "application/x-csh",
  ".css": "text/css",
  ".deb": "application/x-debian-package",
  ".dl": "video/dl",
  ".doc": "application/msword",
  ".drw": "application/drafting",
  ".dvi": "application/x-dvi",
  ".dwg": "application/acad",
  ".dxf": "application/dxf",
  ".dxr": "application/x-director",
  ".etx": "text/x-setext",
  ".ez": "application/andrew-inset",
  ".fli": "video/x-fli",
  ".flv": "video/x-flv",
  ".gif": "image/gif",
  ".gl": "video/gl",
  ".gtar": "application/x-gtar",
  ".gz": "application/x-gzip",
  ".hdf": "application/x-hdf",
  ".hqx": "application/mac-binhex40",
  ".html": "text/html",
  ".ice": "x-conference/x-cooltalk",
  ".ief": "image/ief",
  ".igs": "model/iges",
  ".ips": "application/x-ipscript",
  ".ipx": "application/x-ipix",
  ".jad": "text/vnd.sun.j2me.app-descriptor",
  ".jar": "application/java-archive",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript",
  ".json": "application/json",
  ".latex": "application/x-latex",
  ".lsp": "application/x-lisp",
  ".lzh": "application/octet-stream",
  ".m": "text/plain",
  ".m3u": "audio/x-mpegurl"
  };
exports.write = readFile;  
