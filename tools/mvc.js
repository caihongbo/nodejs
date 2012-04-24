var fs = require('fs');
var controller = "product";
var controllerName ="../controllers/" + controller + ".js";
var viewName = "../views/" + controller + "/index.view"

fs.writeFile(controllerName, "Hey there!", log);

function log(err){
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}

fs.writeFile(viewName, "", log);
