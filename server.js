require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

//import cors
const corsMiddleWare = require("cors");

//import routers
const battleRouter = require("./routers/battles");
const commanderRouter = require("./routers/commanders");
const progressRouter = require("./routers/progress");
const userRouter = require("./routers/user");
//register middleware body parsers/routers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(corsMiddleWare());
app.use(battleRouter);
app.use(commanderRouter);
app.use(progressRouter);
app.use(userRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
