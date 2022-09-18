const path = require('path');
require("dotenv").config({ path: path.resolve(__dirname, '..', '.env') });

const fbAdmin = require("firebase-admin");

const serviceAccount = require("../service-key.json");
console.log(serviceAccount);


// const app = fbAdmin.initializeApp({
//     credential: fbAdmin.credential.cert(serviceAccount)
// });

const app = fbAdmin.initializeApp({
    credential: fbAdmin.credential.cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
    })
});


async function fireMiddleware(req,res,next){
    const auth = req.headers.authorization && req.headers.authorization.split(" ");
    if(!auth || !(auth[0] === "Bearer") || !auth[1]){
        return res.status(401).send("Invalid or missing authorisation token");
    }

    const fireToken = auth[1];

    try {
        // check the token
        const userInfo = await app.auth().verifyIdToken(fireToken);
        if(userInfo.uid) {
            return next();
        } else{
            return res.status(400).send("Invalid token");
        }
        
        
    } catch (e) {
        console.log("Firebase token check error", e);
        return res.status(400).send("Something went wrong, sorry");
    }
}

module.exports = fireMiddleware;