const express = require("express");
const app = express();
const PORT = 4000;

//import routers
const battleRouter = require("./routers/battles");
const commanderRouter = require("./routers/commanders");


//register middleware body parsers/routers
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(battleRouter);
app.use(commanderRouter);


app.listen(PORT, function(){
    console.log(`Server listening on port ${PORT}`);
})











