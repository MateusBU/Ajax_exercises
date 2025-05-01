const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //get every static files (e.g: .css, .json, ...)
app.use(bodyParser.urlencoded({extended: true})) //for ANY url 
app.use(bodyParser.json()) //json to object


//---------- xmlHttpRequest2 ----------//
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, './upload') //current folder to save the file only writes "'.'""
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`) //create file name with the sate, then it is not overloaded
    }
})

const upload = multer({storage}).single('file') //<input name="file"/> xmlHt...2.html
        //path
app.post('/upload', (req, res) =>{
    upload(req, res, err =>{
        if(err){
            return res.end('ERROR!!!!')
        }

        res.end('SUCCESS!!!!')
    })
})
//---------- xmlHttpRequest2 ----------//

//---------- Fetch2 ----------//
          //action from form HTML -> fetch2.html
app.post('/form', (req, res) =>{
    res.send({
        ...req.body, //all data that came as answer
        id: 1 
    })
})
//---------- Fetch2 ----------//

//---------- Axios2 ----------//
app.get('/EvenOrOdd', (req, res) => {
    //req.body -> Data sent in the body of the request (usually in POST, PUT, PATCH).
    //req.query -> Data in the query string of the URL (after the ?). ?number=123
    //req.params-> Data from the URL path itself, based on route parameters (e.g., /users/:id). /123
    const even = (parseInt(req.query.number) % 2) === 0;
    res.send({
        result : even ? 'even' : 'odd'
    })
})


//---------- Axios2 ----------//

app.get('/test', (req, res) => res.send(new Date))
app.listen(8080, console.log('Starting...'))