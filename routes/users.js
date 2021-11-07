const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.send("User New Form")
})

// mini application - independent from the main router
// routers can be nested inside parent routes

module.exports = router