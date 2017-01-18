var express = require('express');
var app = new express();

app.use(express.static('public'));
app.use('/scripts',express.static('node_modules'));

app.get("/",function(req,res){
  res.send("Test");
});

app.listen(3000);
