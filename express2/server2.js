var express = require('express');
var app = express();
const PORT = 8085;
 

app.get('/',function(req,res) {
    res.send('Dairon create a Express Server!');
});



app.listen(PORT,function(){
    console.log('listening on port ${PORT}');
})
