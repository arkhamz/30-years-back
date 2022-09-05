const {commander:Commander} = require("../models");
const express = require("express");
const {Router} = express;
const router = new Router();


//route for getting all commanders
router.get("/commanders", async function(req,res,next){
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















module.exports = router;