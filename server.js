// where we put all of server code
const express = require('express')
const app = express() // creates an application which allows us to set up our entire server

app.set("view engine", "ejs")

app.get('/', (req, res)=> {
    console.log("Here")
    // res.download('server.js') // downloads something to the client
    // res.json({message: "Error"}) // 500 sends error on server, you should send a message with it
    // res.send("Hi")  // send is used for testing purposes, but it's very general
    res.render("index", { text: "World"}) // renders a file and passes it in the path in the file you want to render
})
const userRouter = require("./routes/users")

app.use("/users", userRouter)
// if u have a post section, it' look like this...
// const postRouter = require("./routes/posts")
// app.use("/posts", postRouter)
function logger(req, res, next) { // works like .get
    console.log(req.originalUr1)
    next()
}

app.listen(3000)