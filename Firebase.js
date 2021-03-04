var admin = require("firebase-admin");
var https = require("https");
const fs = require("fs");

var serviceAccount = require("./Admin-sdk-credential.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://training-25537-default-rtdb.europe-west1.firebasedatabase.app",
});
var db = admin.database();


exports.getCredentials = async function getCredentials() {
    var data = {};
    ref = db.ref("Credential Collection/");
    await ref.once("value", (snapshot) => {
        data = snapshot.val();
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    return data
}

exports.addCredentials = function addCredentials() {
    ref = db.ref("Credential Collection/");
    var file = fs.readFileSync("./Admin-sdk-credential.json");
    var cred = JSON.parse(file)
    ref.set(cred)
}