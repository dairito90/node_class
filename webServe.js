var http = require ('http');
const PORT = 8085;
function process_request(req,res) {
    var body = 'Thanks for calling!\n';
    var content_length = body.length;
    res.writeHead(200),{
        'Content_Length' : content_length,
        'Content_Type': 'text/plain'
    };

    res.end(body);
}

var server = http.createServer(process_request);

server.listen(PORT, () => {
    console.log('listening on http://localhost:' + PORT);
});
