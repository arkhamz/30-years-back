const {battle:Battle} = require("./models");

async function getStuff(){

    try {
        const test = await Battle.findOne();
        console.log(test.questions.question1)
        
    } catch (e) {
        console.log(e);
        console.log(e.message);
        
    }
}

getStuff();