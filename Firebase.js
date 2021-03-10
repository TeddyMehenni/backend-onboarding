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
    const ref = db.ref("credentials/");
    try {
        const data = await ref.once("value").then(snp => snp.val())
        return data
    } catch (e) {
        console.log("The read failed: " + errorObject.code);
        return null
    }
}

async function getCredentialsId(value) {
    const ref = db.ref("credentials");
    try {
        const data = await ref.orderByChild('name').equalTo(value)
        return data.once("value").then(snp => snp.val())
    } catch (e) {
        console.log("The read failed: " + e.code);
        return null
    }
}

async function addCredentials(body) {
    const ref = db.ref("credentials");
    await ref.push(body)
    return(body)
}

async function deleteCredential(value) {
    const ref = db.ref("credentials");
    try {
        const target = await ref.orderByChild('name').equalTo(value)
        await target.set({})
        return ("Deleted")
    } catch (e) {
        console.log(e)
    }
}

async function updateCredential(id, body) {
    // throw Error('INVALID ID')
    const ref = db.ref("credentials/" + id);
    await ref.update(body)
    return(body)
}

module.exports = {
    getCredentials,
    addCredentials,
    getCredentialsId,
    updateCredential,
    deleteCredential
}