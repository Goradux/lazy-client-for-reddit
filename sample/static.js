var connect = require('connect');
var serveStatic = require('serve-static');
var cors = require('cors');
var http = require('http');

var app = connect();

var cors_options = {
    origin: '*'
}


// https://stackoverflow.com/questions/40017992/node-connect-add-cors-header
app.use(cors());
app.use(serveStatic(__dirname));
// app.use(serveStatic(__dirname)).listen(8080, function(){
//     console.log('Server running on 8080...');
// });

http.createServer(app).listen(8080);