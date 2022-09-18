const {battle, userProgress,user} = require("../models");
const express = require("express");
const fireMiddleware = require("../middleware/fireMiddleware");
const {Router} = express;
const router = new Router();

// //get battles based on user progress - i.e. get unlocked battle
// router.get("/progress/:userId/battles", fireMiddleware, async function(req,res,next){
//     //get user's ID from request params
//     const {userId} = req.params;
//     const idNum = Number(userId);
//     try {

//         const battleRecords = await userProgress.findAll({
//             where: {
//                 userId: idNum,
//                 unlocked: true
//             },
//             include: [{model: battle}]
//         });
//         if(battleRecords.length < 1){
//             return res.status(404).send("No battle records found");
//         }

//         const battlesArr = battleRecords.map(function(item,index,arr){
//             return item.battle;
//         });

//         // map battleArr to get array of battle IDs
//         const battlesIdArr = battlesArr.map(function(item,index,arr){
//             return item.id;
//         });
//         //get max ID
//         const progress = Math.max(...battlesIdArr);

//         //send battle array and progress (highest battle ID unlocked) response
//         return res.status(200).send({battlesArr, progress});
        
//     } catch (e) {
//         console.log(e);
//         console.log(e.message);
//         next(e);
//     }
// })


//get battles based on user progress - get user from uid i.e. get unlocked battle
router.get("/progress/:uid/battles", fireMiddleware, async function(req,res,next){
    //get user's ID from request params
    const {uid} = req.params;

    try {
        // find user whose uid matches uid
        const singleUser = await user.findOne({
            where:{
                uid: uid
            }
        });

        console.log(singleUser);

        if(!singleUser){   
            return res.status(404).send("User with progress does not exist")
        } else{
             //query userProgress for all progress records associated with a user's ID 

            const battleRecords = await userProgress.findAll({
                where: {
                    userId: singleUser.dataValues.id,
                    unlocked: true
                },
                include: [{model: battle}]
            });

            if(!battleRecords || battleRecords.length < 1){
                return res.status(404).send("No progress records exist for this user");
            } else{

                // produce array of battle objects in each progress record's included battle
                const battlesArr = battleRecords.map(function(item,index,arr){
                    return item.battle;
                });
        
                // map battleArr to get array of battle IDs
                const battlesIdArr = battlesArr.map(function(item,index,arr){
                    return item.id;
                });
                //get max ID
                const progress = Math.max(...battlesIdArr);
        
                //send battle array and progress (highest battle ID unlocked) response
                return res.status(200).send({battlesArr, progress});
    
            }
        } 
    } catch (e) {
        console.log(e);
        console.log(e.message);
        next(e);
    }
})


// add a user progress record - i.e. add/ unlocked battle
router.post("/progress/new",fireMiddleware, async function(req,res,next){

    //get userId and battleId from req.body
    const {uid, battleId} = req.body;

    if(!uid || !battleId){
        return res.status(400).send("Invalid data provided")
    }


    try {
        //get database user by  matching uid
        const dbUser = await user.findOne({
            where: {uid: uid}
        });
        if(!dbUser) return res.status(404).send("db user not found");

        const userId = dbUser.dataValues.id;
        const newProgress = await userProgress.create({
            userId: userId,
            battleId: battleId,
            unlocked: true
        });
        if(!newProgress){
            return res.status(400).send("Invalid data provided")
        }
        // increment frontend progress whenever this api is successfully called?

        return res.status(200).send("added user progress")

    } catch (e) {
        console.log(e);
        console.log(e.message);
        next(e);
    }
})

module.exports = router;