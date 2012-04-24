var  writer = require('./helper');
function view(){
	this.render = function(request, response, route, viewData){
		var viewFile = "Views/" + route.controller + "/" + route.action + ".md";
		console.log('ssdsds'); 
		writer.write(viewFile,response);
	}
}
exports.view =new view();     