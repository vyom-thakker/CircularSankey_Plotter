//import * as http from 'http';
//import * as url from 'url';
//import * as fs from 'fs';
//import * as path from 'path';

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require ('path');


var mimeTypes = {
         "html": "text/html",
         "jpeg": "image/jpeg",
         "jpg": "image/jpeg",
         "png": "image/png",
         "js": "text/javascript",
         "css": "text/css"};

http.createServer((request, response)=>{
        var pathname = url.parse(request.url).pathname;
        var filename = "index.html";
        if(pathname == "/"){
                    filename = "index.html";
                }
        else
                filename = path.join(process.cwd(), pathname);

        try{
                    fs.accessSync(filename, fs.F_OK);
                    var fileStream = fs.createReadStream(filename);
                    var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
                    response.writeHead(200, {'Content-Type':mimeType});
                    fileStream.pipe(response);
                }
        catch(e) {
                        console.log('File not exists: ' + filename);
                        response.writeHead(404, {'Content-Type': 'text/plain'});
                        response.write('404 Not Found\n');
                        response.end();
                        return;
                }
        return;
        }
).listen(8080);
