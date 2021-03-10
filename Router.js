const express = require("express");
const router = express.Router();
const firebase = require("./Firebase.js")
const func = require("./Function.js")

router.get("/read/:id?", (req, res) => {
    try {
        if (req.params.id) {
            firebase.getCredentialsId(req.params.id).then((cred) => {
                if (cred) {
                    res.status(200)
                    res.json(cred)
                } else {
                    res.sendStatus(403);
                }
            })
        }
        else {
            firebase.getCredentials().then((data) => {
                if (data) {
                    res.status(200)
                    res.json(data)
                } else {
                    res.status(404);
                    res.json(null)
                }
            })
        }
    } catch (e) {
        res.sendStatus(403)
    }
})

router.post("/create", (req, res) => {
    try {
        const yolo = fun.validate(req.body)
        firebase.addCredentials(req.body).then((cred) => {
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

router.delete("/delete/:id", (req,res) => {
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

router.put("/update/:id", (req, res) => {
    try {
        firebase.updateCredential(req.params.id, req.body).then((data) => {
            if (data) {
                res.status(200)
                res.json(data)
            } else {
                res.status(403)
            }
        })
    } catch (e) {
        console.error(e)
        res.sendStatus(403)
    }
})
router.use("/credentials", router)
module.exports = router;