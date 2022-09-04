'use strict';
const { pathToFileURL } = require("url");

const bavaria = pathToFileURL("../assets/bavaria.png")
const bohemia = pathToFileURL("../assets/bohemia.png")
const catholic = pathToFileURL("../assets/catholic-league.png")
const denmarkNorway = pathToFileURL("../assets/denmark-norway.png")
const dutch = pathToFileURL("../assets/dutch.png")
const hesseKassel = pathToFileURL("../assets/hesse-kassel.png")
const hre = pathToFileURL("../assets/hre.png")
const palatinate = pathToFileURL("../assets/palatinate.png")
const prussia = pathToFileURL("../assets/prussia.png")
const savoyard = pathToFileURL("../assets/savoyard.png")
const saxony = pathToFileURL("../assets/saxony.png")
const spanish = pathToFileURL("../assets/spanish.png")
const swedish = pathToFileURL("../assets/swedish.png")
const transylvania = pathToFileURL("../assets/transylvania.png")

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert("battles", [
      {
        // START OF BATTLE OBJECT
        prelude: "The naming of the fiercely devout Roman catholic Ferdinand II as Holy Roman Emperor and king of Bohemia (precursor to czechia), led to the mostly protestant population of Bohemia fearing the loss of religious freedom, rights and autonomy. In response to perceived violations of the royal assurances of religious freedom, a group of Bohemian noblemen met with representatives of the emperor at the royal Prague Castle. The meeting ended, and a rebellion begun with the Royal representatives being thrown out of a window and seriously injured upon landing on a large pile of manure. Emperor Ferdinand II set out to conquer Bohemia and quash the rebellion, with an army under Field Marshal Tilly.",
        name: "White Mountain",
        description: "A small imperial force was sent to probe the protestant rear, causing the surprised Bohemians to retreat. Tilly quickly sent in reinforcements, causing the Bohemian rear forces to crumble. The protestant Christian II, prince of ANhalt-Bernburg, tried to support his bohemian allies with a cavalry charge, which was countered by Tilly's cavalry and repelled. The Bohemian infantry, only now approaching the imperial army, retreated after seeing their cavalry retreating. The protestant army scattered, the battle lasting only one hour.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/The_Battle_of_White_Mountain_%28by_Peter_Snayers%29.jpg",
        result: "Catholic Imperial-Spanish victory",
        year: "1620",
        date: "8 November 1620",
        latitude: "50.078333",
        longitude: "14.319444",
        army_one: JSON.stringify({
          beligerents:[["Holy Roman Empire",hre],["Catholic League",catholic],["Spanish empire",spanish]],
          commanders: [["Johann von Tilly",catholic],["Maximilian I",catholic],["Charles de Bucquoy",hre]],
          strength: {number: 23000, guns:12},
          casualties: "650 killed and wounded"
        }),
        army_two: JSON.stringify({
          beligerents:[["Bohemian Confederation",bohemia],["Electoral Palatinate",palatinate]],
          commanders: [["Christian of Anhalt", palatinate],["Jindřich Matyáš Thurn", bohemia]],
          strength: {number: 21000, guns:10},
          casualties: "2,800 killed and wounded"
        }),
        questions: JSON.stringify({
          question1: {
            text: "How long did the battle last?",
            answerOptions:[
              {answerText: "3 hours", isCorrect:false},
              {answerText: "1 hour", isCorrect:true},
              {answerText: "4 hours", isCorrect:false},
            ]
          },
          question2: {
            text: "What triggered the rebellion?",
            answerOptions:[
              {answerText: "Lack of food", isCorrect:false},
              {answerText: "Protestants throwing catholic imperial representatives out of a castle window", isCorrect:true},
              {answerText: "religious harmony", isCorrect:false},
            ]
          }
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
        
      },
      {
        // START OF BATTLE OBJECT
        prelude: "Christian IV of Denmark, ruler of the Duchy of Holstein ( a part of the holy roman empire) and member of the protestant Lower Saxon circle, remained neutral during the early stages of the war, following the Bohemian revolt. He and the other members increasingly feared that Emperor Ferdinand intended to retake former catholic lands in North-West Germany, now held by protestants. This fear was confirmed when Catholic league forces led by the Count of tilly, and an Imperial army under Albrecht von Wallenstein, attacked Magdeburg. Christian was appointed commander of the saxon forces.",
        name: "Lutter",
        description: "The Danish-German army led by Christian abandoned their attempt to assist nearby protestant fortresses at Munden, Northeim and Gottingem, following their capture by the count of Tilly and his forces. After harrassment by Tilly's cavalry, Christian decided to make a stand at Lutter am Barenberge. The imperial infantry broke through the Danish line on three occasions but each time was repulsed by a cavalry counter-attack. Eventually, the Danish army was no longer able to maintain its ground and when its entire artillery fell into the hands of the enemy, panic set in and the Danes retreated towards the town of Stade.",
        imageUrl: "https://tabletopdeutschland.files.wordpress.com/2015/06/lutter-am-barenberge-26.jpg",
        result: "",
        year: "1626",
        date: "Imperial Victory",
        latitude: "51.99",
        longitude: "10.271111",
        army_one: JSON.stringify({
          beligerents:[["Holy Roman Empire",hre],["Catholic League", catholic]],
          commanders: [["Count of Tilly", hre ],["Graf Anholt", hre ]],
          strength: {number:24000, guns: 22},
          casualties: ""
        }),
        army_two: JSON.stringify({
          beligerents:[["Denmark-Norway",denmarkNorway]],
          commanders: [["Christian IV", denmarkNorway],["Philip of Hesse-Kassel", denmarkNorway],["Fuchs von Bimbach",denmarkNorway ]],
          strength: {number: 21000, guns: 20},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "What did Christian IV and his fellow lower saxon circle members fear the emperor might do?",
            answerOptions:[
              {answerText: "Confiscate protestant lands in north-west germany", isCorrect:true},
              {answerText: "Increase taxes", isCorrect:true},
              {answerText: "Forbid the raising of pigs", isCorrect:false},
            ]
          },
          question2: {
            text: "What caused Danish forces to panic and retreat",
            answerOptions:[
              {answerText: "A bigger, more catholic army", isCorrect:false},
              {answerText: "The capture of their artillery guns", isCorrect:true},
              {answerText: "The capture of their camp", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "",
        name: "Stralsund",
        description: "",
        imageUrl: "",
        result: "",
        year: "1628",
        date: "",
        latitude: "54.309167",
        longitude: "13.081944",
        army_one: JSON.stringify({
          beligerents:[["",],["",],["", ]],
          commanders: [["",],["",],["", ]],
          strength: {},
          casualties: ""
        }),
        army_two: JSON.stringify({
          beligerents:[["",],["",]],
          commanders: [["P", ],["", ]],
          strength: {},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
          question2: {
            text: "?",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "",
        name: "Breitenfeld",
        description: "",
        imageUrl: "",
        result: "",
        year: "163",
        date: "",
        latitude: "51.417778",
        longitude: "12.377778",
        army_one: JSON.stringify({
          beligerents:[["",],["",],["", ]],
          commanders: [["",],["",],["", ]],
          strength: {},
          casualties: ""
        }),
        army_two: JSON.stringify({
          beligerents:[["",],["",]],
          commanders: [["P", ],["", ]],
          strength: {},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
          question2: {
            text: "?",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "",
        name: "Lutzen",
        description: "",
        imageUrl: "",
        result: "",
        year: "1632",
        date: "",
        latitude: "51.25",
        longitude: "12.133333",
        army_one: JSON.stringify({
          beligerents:[["",],["",],["", ]],
          commanders: [["",],["",],["", ]],
          strength: {},
          casualties: ""
        }),
        army_two: JSON.stringify({
          beligerents:[["",],["",]],
          commanders: [["P", ],["", ]],
          strength: {},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
          question2: {
            text: "?",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "",
        name: "Rocroi",
        description: "",
        imageUrl: "",
        result: "",
        year: "1643",
        date: "",
        latitude: "49.919444",
        longitude: "4.527778",
        army_one: JSON.stringify({
          beligerents:[["",],["",],["", ]],
          commanders: [["",],["",],["", ]],
          strength: {},
          casualties: ""
        }),
        army_two: JSON.stringify({
          beligerents:[["",],["",]],
          commanders: [["P", ],["", ]],
          strength: {},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
          question2: {
            text: "?",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "",
        name: "Freiburg",
        description: "",
        imageUrl: "",
        result: "",
        year: "1644",
        date: "",
        latitude: "47.9955",
        longitude: "7.8522",
        army_one: JSON.stringify({
          beligerents:[["",],["",],["", ]],
          commanders: [["",],["",],["", ]],
          strength: {},
          casualties: ""
        }),
        army_two: JSON.stringify({
          beligerents:[["",],["",]],
          commanders: [["P", ],["", ]],
          strength: {},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
          question2: {
            text: "?",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "",
        name: "Jankau",
        description: "",
        imageUrl: "",
        result: "",
        year: "1645",
        date: "",
        latitude: "49.6503",
        longitude: "14.7294",
        army_one: JSON.stringify({
          beligerents:[["",],["",],["", ]],
          commanders: [["",],["",],["", ]],
          strength: {},
          casualties: ""
        }),
        army_two: JSON.stringify({
          beligerents:[["",],["",]],
          commanders: [["P", ],["", ]],
          strength: {},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
          question2: {
            text: "?",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "",
        name: "Nordlingen",
        description: "",
        imageUrl: "",
        result: "",
        year: "1645",
        date: "",
        latitude: "48.805556",
        longitude: "10.485833",
        army_one: JSON.stringify({
          beligerents:[["",],["",],["", ]],
          commanders: [["",],["",],["", ]],
          strength: {},
          casualties: ""
        }),
        army_two: JSON.stringify({
          beligerents:[["",],["",]],
          commanders: [["P", ],["", ]],
          strength: {},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
          question2: {
            text: "?",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "",
        name: "Zusmarshausen",
        description: "",
        imageUrl: "",
        result: "",
        year: "1648",
        date: "",
        latitude: "48.4002",
        longitude: "10.5967",
        army_one: JSON.stringify({
          beligerents:[["",],["",],["", ]],
          commanders: [["",],["",],["", ]],
          strength: {},
          casualties: ""
        }),
        army_two: JSON.stringify({
          beligerents:[["",],["",]],
          commanders: [["P", ],["", ]],
          strength: {},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
          question2: {
            text: "?",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "",
        name: "Lens",
        description: "",
        imageUrl: "",
        result: "",
        year: "1648",
        date: "",
        latitude: "50.416667",
        longitude: "2.833333",
        army_one: JSON.stringify({
          beligerents:[["",],["",],["", ]],
          commanders: [["",],["",],["", ]],
          strength: {},
          casualties: ""
        }),
        army_two: JSON.stringify({
          beligerents:[["",],["",]],
          commanders: [["P", ],["", ]],
          strength: {},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
          question2: {
            text: "?",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "",
        name: "Prague",
        description: "",
        imageUrl: "",
        result: "",
        year: "1648",
        date: "",
        latitude: "50.086389",
        longitude: "14.412222",
        army_one: JSON.stringify({
          beligerents:[["",],["",],["", ]],
          commanders: [["",],["",],["", ]],
          strength: {},
          casualties: ""
        }),
        army_two: JSON.stringify({
          beligerents:[["",],["",]],
          commanders: [["P", ],["", ]],
          strength: {},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
          question2: {
            text: "?",
            answerOptions:[
              {answerText: "", isCorrect:false},
              {answerText: "", isCorrect:true},
              {answerText: "", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      }
     

    ],{})
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("battles", null, {});
  }
};
