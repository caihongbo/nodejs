var  writer = require('./helper');
function view(){
	this.render = function(request, response, route){
			var viewFile = "Views/" + route.controller + "/" + route.action + ".md";
			writer.write(viewFile,response);
	}
}

exports.view =new view();