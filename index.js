var express = require('express');
var bodyParser = require ('body-parser');
var mysql = require('mysql');


const router = require('./user.js')


const app = express();
app.use(router)
const port = 6000;

app.use(bodyParser.urlencoded({ extended : false}))

app.use(bodyParser.json())


app.listen(port,() => console.log(`Listen to port ${port}`))