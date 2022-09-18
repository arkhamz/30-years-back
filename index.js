require('dotenv').config();
const filer = require("fs")

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// fb admin stuff
const admin = require("firebase-admin");
const serviceAccount = filer.readFileSync("./service-key.json",null);

const adminApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

//import cors
const corsMiddleWare = require("cors");
app.use(corsMiddleWare({
  'allowedHeaders': ['Content-Type'], // headers that React is sending to the API
  'exposedHeaders': ['Content-Type'], // headers that you are sending back to React
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));


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