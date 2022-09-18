const {user,userProgress} = require("../models");
const express = require("express");
const {Router} = express;
const router = new Router();

//create new user and returns that user's table id
// router.post("/users/new", async function(req,res,next){
//     //get displayName, email and uid from req.body
//     const {displayName, email, uid} = req.body;

//     if(!displayName  || !email || !uid){
//         return res.status(400).send("Invalid data provided");
//     }

//     try {

//         //Create DATABASE USER based on firebase user's details, id auto added
//         const newUser = await user.create({
//             displayName,
//             email,
//             uid
//         });
//         await newUser.save();

//         if(!newUser){
//             return res.status(400).send("Invalid data provided");
//         } else{
//             //returns dB user record ID , signup thunk will use this to create user progress
//         return res.status(200).send({userId:newUser.dataValues.id});
//         }
    
//     } catch (e) {
//         console.log(e);
//         console.log(e.message);
//         next(e);
//     }
// })

//create user and progress for that user
router.post("/users/new",async function(req,res,next){
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
            return res.status(400).send("Invalid data provided for user creation");
        } else{
            // new user eixts, create userProgress record for them
            const newProgress = await userProgress.create({
                userId: newUser.dataValues.id,
                battleId: 1,
                unlocked: true
            });
            if(!newProgress){
                return res.status(400).send("Invalid data provided or issue with newUser sql creation")
            }
            // increment frontend progress whenever this api is successfully called?
    
            return res.status(200).send("added user progress");
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
        } else{
            return res.status(200).send(singleUser);
        }
        
    } catch (e) {
        console.log(e);
        console.log(e.message);
        next(e);
        
    }
})



module.exports = router;