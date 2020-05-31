var express = require('express');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
var app_path = '../dist/tictac';

app.use('/', express.static(path.join(__dirname, app_path))).get('*',(req,res)=> res.sendFile(path.join(__dirname, app_path+'/index.html'))).listen(PORT,()=>console.log(`Listening on ${PORT}`));
