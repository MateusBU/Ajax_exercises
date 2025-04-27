const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //get every static files (e.g: .css, .json, ...)
app.use(bodyParser.urlencoded({extended: true})) //for ANY url 
app.use(bodyParser.json()) //json to object

app.get('/test', (req, res) => res.send(new Date))
app.listen(8080, console.log('Starting...'))