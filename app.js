var server = require('./server');
var router = require('./router');
var fs = require('fs');
server.start(router);
fs.watch('./', function(event, fileName){
	if(fileName.indexOf('.js')){
		var name = require.resolve('./' + fileName);
		console.log(name); 
		deleteCache(name);   
	}   
});
 
var deleteCache = function(moduleFullpathAndExt){
	delete require[moduleFullpathAndExt];
	require[moduleFullpathAndExt];
} 
    