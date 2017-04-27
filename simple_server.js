var http = require ('http');
const PORT = 8085;

function handle_incomingrequest (req,res) {
    console.log('INCOMING REQUEST:' + req.method + ' ' + req.url);
    res.writeHead(200, {"Content_Type": "application/json"});
    res.end(JSON.stringify({error:null, name:"Dairon", lastname:"Rodriguez"}) + '\n');
}

var server = http.createServer(handle_incomingrequest);

server.listen(PORT, () => {
    console.log('listening on http://localhost:' + PORT);
});
