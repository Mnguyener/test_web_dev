// EVERYTHING IS READ FROM TO BOTTOM 
// MAKE SURE THE CODE IS ORDERED TO WORK PROPERLY

// mini application - independent from the main router
// routers can be nested inside parent routes
const express = require("express")
const router = express.Router()
// basically creates pages for each slash
router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.send("User New Form")
})

router.post('/', (req, res) => {
    res.send("Create User")
})

router
.route("/:userId") //get, put, delete will response to this individual route
.get((req, res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.userId}`)
})
.put((req, res) => {
    res.send(`Update User With ID ${req.params.userId}`)
})
.delete((req, res) => {
    res.send(`Delete User With ID ${req.params.userId}`)
})

// EXACT SAME - JUST DIF FORMAT
/* router.get('/:userId', (req, res) => {
    res.send(`Get User With ID ${req.params.userId}`)
}) // creates a dynamic parameter

router.put('/:userId', (req, res) => {
    res.send(`Get User With ID ${req.params.userId}`)
})
router.delete('/:userId', (req, res) => {
    res.send(`Get User With ID ${req.params.userId}`)
})
*/
const users = [{ name: "Kyle"}, { name: "Sally"}]
router.param("userId", (req, res, next, id)=> {
    // id is the value of the userId
    req.user = users[id]
    next()
})
// next() runs the next thing in line and stops the page infinitely loading
 
module.exports = router
