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

router.get("/credentials/read/:id", (req, res) => {
    try {
        firebase.getCredentialsId(req.params.id).then((cred) => {
            if (cred) {
                res.status(200)
                res.json(cred)
            } else {
                res.status(403);
            }
        })
    } catch (e) {
        res.status(403)
    }
})

router.post("/credentials/create", (req, res) => {
    try {
        firebase.addCredentials().then((cred) => {
            if (cred) {
                res.status(200)
                res.json(cred)
            } else {
                res.status(403);
            }
        })
    } catch (e) {
        res.status(403)
    }
})

router.delete("/credentials/delete/:id", (req,res) => {
    try {
        firebase.deleteCredential(req.params.id).then((data) => {
            if (data) {
                res.status(200)
                res.json(data)
            } else {
                res.status(403)
            }
        })
    } catch (e) {
        res.status(403)
    }
})