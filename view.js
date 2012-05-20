var  writer = require('./helper');
var viewFolder = "Views/";
function view(){
	this.render = function(request, response, route, viewData){
		var viewFile = viewFolder + route.controller + "/" + route.action + ".md";
		writer.write(viewFile,response);
	}
}
exports.view =new view();     
