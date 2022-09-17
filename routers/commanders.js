const {commander:Commander} = require("../models");
const express = require("express");
const fireMiddleware = require("../middleware/fireMiddleware");
const {Router} = express;
const router = new Router();


//route for getting all commanders
router.get("/commanders", fireMiddleware, async function(req,res,next){
    try {

        const commanders = await Commander.findAll();
        if (commanders.length < 1) {
            return res.status(404).send("No commanders could be found");
        } else{
            return res.status(200).send(commanders);
        }
    } catch (e) {
        console.log(e);
        console.log(e.message);
        next(e);
        
    }
});

//ENDPOINT FOR GETTING SPECIFIC COMMANDER
router.get("/commanders/:id", fireMiddleware, async function(req,res,next){

    const {id} = req.params;
    const idNum = Number(id);

    try {
        const singleCommander = await Commander.findByPk(idNum);
        if(!singleCommander){
            return res.status(404).send("Commander with this id does not exist");
        } else{
            return res.status(200).send(singleCommander);
        }      
    } catch (e) {
        console.log(e);
        console.log(e.message);
        next(e);
    }
})















module.exports = router;