var fs = require('fs');
var path =require('path');
var controllersFolder = "../Controllers/";
var viewsFolder= "../views/";
if(process.argv.length == 2){
    console.log("Error: the argument should contains controller or action for example:\n node mvc.js [product] [show]");
}
var controller = process.argv[2];
var action = process.argv[3];

var controllerFile= controllersFolder + controller + ".js";
var viewFolder = viewsFolder + controller;
var viewFile=viewFolder + "/" + action + ".md"; 

if(!path.existsSync(viewFolder)){
	console.log("create view folder "+ viewFolder);
    fs.mkdir(viewFolder);
}

if(!path.existsSync(controllerFile)){
    fs.writeFile(controllerFile, "Hey there!", log);
}

if(!path.existsSync(viewFile)){
    fs.writeFile(viewFile, "", log);
}

function log(err){
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}


