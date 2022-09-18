// require('dotenv').config();

const fbAdmin = require("firebase-admin");

const serviceAccount = require(`${process.env.GOOGLE_APPLICATION_CREDENTIALS}`);


const app = fbAdmin.initializeApp({
    credential: fbAdmin.credential.cert(serviceAccount)
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