const {userProgress,battle,user} = require("./models");


async function getStuff(){

    try {

        // query should filter for records by userId=targetId and unlocked =true
        //include associated battle
        //returns an array of record objects with a battle object
        //can map through the array to only return an array of battles
        const test = await userProgress.findAll({
            where: {
                userId:2,
                unlocked: true,
            },
            include: [{model:battle}]
        });
        console.log(test[0].battle);
        
    } catch (e) {
        console.log(e);
        console.log(e.message);
        
    }
}

// const path = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

// getStuff();

