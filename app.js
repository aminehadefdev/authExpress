const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var username = "amine"
var password = "couocou"



app.post("/user", (req, res)=>{
    if(!req.headers.username || req.headers.username === '' || !req.headers.password || req.headers.password === ''){
        res.status(401).json({
            "success": false
        })
        return
    }
    if(req.headers.username === username && req.headers.password === password){
        res.status(201).json({
            "success": true
        })
    }else{
        res.status(401).json({
            "success": false
        })
        return
    }
    res.status(500)
})


app.listen(3000, (err)=>{
    if(err) throw err
    console.log("server run port 3000")
})