// where we put all of server code
const express = require('express')
const app = express() // creates an application which allows us to set up our entire server

app.get('/', (req, res)=> {
    console.log('Here')
    // res.download('server.js') // downloads something to the client
    // res.json({message: "Error"}) // 500 sends error on server, you should send a message with it
    // res.send("Hi")  // send is used for testing purposes, but it's very general
    res.render('index') // renders a file and passes it in the path in the file you want to render
})
 
app.listen(3000)