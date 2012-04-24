var fs = require('fs');                                                                        

fs.watch('../', function(event, fileName) {
	if(fileName.indexOf('.js')){
		console.log(event);
		console.log(fileName);
	}
});

console.log("start watching app");