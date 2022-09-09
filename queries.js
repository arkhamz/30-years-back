const {userProgress,battle,user} = require("./models");


async function getStuff(){

    try {

        // query userprogress for records matching user Id
        //include associated battles
        const test = await userProgress.findAll({
            where: {
                userId:2,
                unlocked: true,
            },
            include: [{model:battle}]
        });
        console.log(test)
        
    } catch (e) {
        console.log(e);
        console.log(e.message);
        
    }
}

getStuff();