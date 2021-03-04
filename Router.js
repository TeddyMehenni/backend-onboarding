const express = require("express");
const router = express.Router();
const firebase = require("./Firebase.js")

module.exports = router;

router
    .get("/credentials", (req, res) => {
        firebase.getCredentials().then((data) => {
            res.json(data)
        })
    })

router.post("/addcredentials", (req, res) => {
    firebase.addCredentials()
})