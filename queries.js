// const {battle:Battle} = require("./models");

const {pathToFileURL} = require("url");

const bavaria = pathToFileURL("./assets/bavaria.png");
console.log(bavaria.pathname); //returns string of path

async function getStuff(){

    try {
        const test = await Battle.findOne();
        console.log(test.questions.question1)
        
    } catch (e) {
        console.log(e);
        console.log(e.message);
        
    }
}

// getStuff();