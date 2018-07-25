
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  // Hardcoding for simplicity, but must be real database data
  res.json([
    {"id": 1,"firstName": "Diana","lastName": "Delgado","email": "diana.delgadod@outlook.com" },
    {"id": 1,"firstName": "Sofia","lastName": "Delgado","email": "sofia.delgadod@outlook.com" },
    {"id": 1,"firstName": "Alejandra","lastName": "Delgado","email": "alejandra.delgadod@outlook.com" },
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
