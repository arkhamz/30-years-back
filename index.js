require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

//import cors
const corsMiddleWare = require("cors");
app.use(corsMiddleWare({
  'allowedHeaders': ['Content-Type', "Authorization", "authorization"], // headers that React is sending to the API
  'exposedHeaders': ['Content-Type'], // headers that you are sending back to React
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));


// fb admin stuff
const admin = require("firebase-admin");
const serviceAccount = require("./service-key.json");

const adminApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});



//import routers
const battleRouter = require("./routers/battles");
const commanderRouter = require("./routers/commanders");
const progressRouter = require("./routers/progress");
const userRouter = require("./routers/user");
//register middleware body parsers/routers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(battleRouter);
app.use(commanderRouter);
app.use(progressRouter);
app.use(userRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = adminApp;