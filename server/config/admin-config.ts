var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.json");

export const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
