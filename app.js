var server = require('./server');
var router = require('./router');
var fs = require('fs');
server.start(router);
