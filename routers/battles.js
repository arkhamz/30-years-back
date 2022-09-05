const {battle:Battle} = require("../models");
const express = require("express");
const {Router} = express;
const router = new Router();


//route for getting all battles
router.get("/battles", async function(req,res,next){
    try {
        const battles = await Battle.findAll();
        if (battles.length < 1) {
            return res.status(404).send("No battles could be found");
        } else{
            return res.status(200).send(battles);
        }
    } catch (e) {
        console.log(e);
        console.log(e.message);
        next(e);
    }
});















module.exports = router;