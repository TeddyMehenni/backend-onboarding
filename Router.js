const express = require("express");
const router = express.Router();
const firebase = require("./Firebase.js")

module.exports = router;



router.use("/credentials", (req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
})

router.get("/credentials/read", (req, res) => {
    firebase.getCredentials().then((data) => {
        if (data) {
            res.status(200)
            res.json(data)
        } else {
            res.status(403);
            res.json(null)
        }
    })
})

router.post("/credentials/create", (req, res) => {
    firebase.addCredentials()
    res.status(200)
})