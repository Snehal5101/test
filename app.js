let path = require('path');
let express = require('express');
let app = express();


app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, 'about.html'));
})

app.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname, 'contact.html'));
})

app.listen(5000);