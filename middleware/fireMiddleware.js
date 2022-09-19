// const path = require('path');
// require("dotenv").config({ path: path.resolve(__dirname, '..', '.env') });

const fbAdmin = require("firebase-admin");

const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;

const app = fbAdmin.initializeApp({
    credential: fbAdmin.credential.cert(serviceAccount)
});
//ssdsd
//sdsds
///dsdsd

// const app = fbAdmin.initializeApp();



async function fireMiddleware(req,res,next){
    console.log("start auth middleware")
    const auth = req.headers.authorization && req.headers.authorization.split(" ");
    if(!auth || !(auth[0] === "Bearer") || !auth[1]){
        return res.status(401).send("Invalid or missing authorisation token");
    }

    const fireToken = auth[1];
    console.log("token", fireToken);

    try {
        // check the token
        const userInfo = await app.auth().verifyIdToken(fireToken);
        if(userInfo.uid) {
            return next();
        } else{
            return res.status(400).send("Invalid token");
        }
        //dadsdsdds
        
        
    } catch (e) {
        console.log("Firebase token check error", e);
        return res.status(400).send("Something went wrong, sorry");
    }
}

module.exports = fireMiddleware;