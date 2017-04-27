var express = require ('express');
var app = express();
const PORT = 8085;

app.get('/',function(req,res) {
    res.send('hello world');
});



app.listen(PORT,function(){
    console.log('listening on port ${PORT}');
});
