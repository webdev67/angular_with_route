var express = require('express');
var app = new express();

app.use(express.static('public'));
app.use('/scripts',express.static('node_modules'));
app.use('/uib',express.static('node_modules/angular-ui-bootstrap'));
console.log("App Running on port 3000");

app.listen(3000);
