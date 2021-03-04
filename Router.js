const express = require("express");
const router = express.Router();
const firebase = require("./Firebase.js")

module.exports = router;

router
    .get("/credentials", async (req, res) => {
        var credentials = await firebase.getCredentials();
        console.log(credentials)
        // res.json(firebase.getCredentials())
    })

router.post("/addcredentials", (req, res) => {
    firebase.addCredentials()
})