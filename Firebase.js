const admin = require("firebase-admin");
const https = require("https");
const fs = require("fs");

var serviceAccount = require("./Admin-sdk-credential.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://training-25537-default-rtdb.europe-west1.firebasedatabase.app",
});
var db = admin.database();


 async function getCredentials() {
    var data = {};
    const ref = db.ref("Credential Collection/");
    await ref.once("value", (snapshot) => {
        data = snapshot.val();
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    return data
}

async function addCredentials() {
    const ref = db.ref("credentials");
    const file = fs.readFile("./Admin-sdk-credential.json");
    const cred = JSON.parse(file)
    ref.push(cred)
    return(cred)
}

exports.addCredentials = addCredentials;
exports.getCredentials = getCredentials;