const {user} = require("../models");
const express = require("express");
const {Router} = express;
const router = new Router();

//create new user and returns that user's table id
router.post("/users/new", async function(req,res,next){
    //get displayName, email and uid from req.body
    const {displayName, email, uid} = req.body;

    if(!displayName  || !email || !uid){
        return res.status(400).send("Invalid data provided");
    }

    try {

        //Create DATABASE USER based on firebase user's details, id auto added
        const newUser = await user.create({
            displayName,
            email,
            uid
        });
        await newUser.save();

        if(!newUser){
            return res.status(400).send("Invalid data provided");
        } else{
            //returns dB user record ID , signup thunk will use this to create user progress
        return res.status(200).send({userId:newUser.dataValues.id});
        }
    
    } catch (e) {
        console.log(e);
        console.log(e.message);
        next(e);
    }
})

// get database user based on its firebase uid
router.get("/users/:uid", async function(req,res,next){
    const {uid} = req.params
    try {

        const singleUser = await user.findOne({
            where:{
                uid: uid
            }
        });

        if(!singleUser){
            return res.status(404).send("No user found")
        }

        return res.status(200).send(singleUser);

        
    } catch (e) {
        console.log(e);
        console.log(e.message);
        next(e);
        
    }
})



module.exports = router;