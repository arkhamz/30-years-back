const {user} = require("../models");
const express = require("express");
const {Router} = express;
const router = new Router();

//create new user
router.post("/users/new", async function(req,res,next){
    //get displayName, email and uid from req.body
    const {displayName, email, uid} = req.body;

    try {

        //Create new user on database, based on firebase user's details
        //will automatically be given an id
        const newUser = await user.create({
            displayName,
            email,
            uid
        });

        if(!newUser){
            return res.status(400).send("Invalid data provided");
        }

        next();
    
    } catch (e) {
        console.log(e);
        console.log(e.message);
        next(e);
    }
})



module.exports = router;