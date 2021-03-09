const admin = require("firebase-admin");
const https = require("https");
const fs = require("fs/promises");

var serviceAccount = require("./Admin-sdk-credential.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://training-25537-default-rtdb.europe-west1.firebasedatabase.app",
});
var db = admin.database();


 async function getCredentials() {
    var data = {};
    const ref = db.ref("credentials/");
    try {
        await ref.once("value", (snapshot) => {
            data = snapshot.val();
        })
    } catch (e) {
        console.log("The read failed: " + errorObject.code);
        return null
    }
    return data
}

async function getCredentialsId(id) {
    var data = {};
    console.log(id)
    const ref = db.ref("credentials/" + id);
    try {
        await ref.once("value", (snapshot) => {
            data = snapshot.val();
        })
    } catch (e) {
        console.log("The read failed: " + errorObject.code);
        return null
    }
    return data
}

async function addCredentials() {
    const ref = db.ref("credentials");
    const file = await fs.readFile("./Admin-sdk-credential.json");
    const cred = JSON.parse(file)
    ref.push(cred)
    return(cred)
}

async function deleteCredential(id) {
    const ref = db.ref("credentials/" + id);
    await ref.set({})
    return ("Deleted")
}

async function updateCredential(id, body) {
    const ref = db.ref("credentials/" + id);
    try {
        await ref.update(body)
        return(body)
    } catch (e) {
        console.log("The put failed: " + errorObject.code);
        return ("failed")
    }
}

exports.addCredentials = addCredentials;
exports.getCredentials = getCredentials;
exports.getCredentialsId = getCredentialsId;
exports.deleteCredential = deleteCredential;
exports.updateCredential = updateCredential;