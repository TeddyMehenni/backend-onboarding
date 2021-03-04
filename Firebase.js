var admin = require("firebase-admin");
var https = require("https");
const fs = require("fs");

var serviceAccount = require("./training-25537-firebase-adminsdk-7s24j-b453971a2e.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://training-25537-default-rtdb.europe-west1.firebasedatabase.app",
});
var db = admin.database();


function getCredentials() {
    ref = db.ref("Credential Collection/");
    ref.on("value", (snapshot) => {
        // console.log(snapshot.val())
        return (snapshot.val());
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        return null;
    });
}

function addCredentials() {
    ref = db.ref("Credential Collection/");
    var file = fs.readFileSync("./training-25537-firebase-adminsdk-7s24j-b453971a2e.json");
    var cred = JSON.parse(file)
    ref.set(cred)
}

exports.getCredentials = getCredentials;
exports.addCredentials = addCredentials;