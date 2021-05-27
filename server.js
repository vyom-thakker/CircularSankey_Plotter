var http = require('http');
var fs = require('fs');

const PORT=8080;

var d3pack= require('/home/vyom/Design-SCE/Design-SCE/sankeyPlot/d3-sankey-circular.js');
var sankeyfile= require('/home/vyom/Design-SCE/Design-SCE/sankeyPlot/Sankey_1.js');



const folderPath = '/home/vyom/Design-SCE/Design-SCE/sankeyPlot/';

fs.readFileSync('./Sankey_1.js');
fs.readFileSync('./d3-sankey-circular.js');

fs.readFile('./index.html', function (err, html) {


        if (err) throw err;

        http.createServer(function(request, response) {
                    response.writeHeader(200, {"Content-Type": "text/html"});
                    response.write(html);
                    response.end();
                }).listen(PORT);
});


