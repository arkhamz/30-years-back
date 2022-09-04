'use strict';
const { devNull } = require("os");
const { hrtime } = require("process");
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
const stralsund = pathToFileURL("../assets/stralsund.png")
const scots = pathToFileURL("../assets/scots.png")
const france = pathToFileURL("../assets/france.png")

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
        prelude: "Christian IV of Denmark, ruler of the Duchy of Holstein ( a part of the holy roman empire) and member of the protestant Lower Saxon circle, remained neutral during the early stages of the war, following the Bohemian revolt. He and the other members increasingly feared that Emperor Ferdinand intended to retake former catholic lands in North-West Germany, now held by protestants. This fear was confirmed when Catholic league forces led by the Count of tilly, and an Imperial army under Albrecht von Wallenstein, attacked Magdeburg. Christian was appointed commander of the saxon forces, with Ernst von Mansfeld and Christian of Brunswick as fellow commanders.",
        name: "Lutter",
        description: "The Danish-German army led by Christian abandoned their attempt to assist nearby protestant fortresses at Munden, Northeim and Gottingem, following their capture by the count of Tilly and his forces. After harrassment by Tilly's cavalry, Christian decided to make a stand at Lutter am Barenberge. The imperial infantry broke through the Danish line on three occasions but each time was repulsed by a cavalry counter-attack. Eventually, the Danish army was no longer able to maintain its ground and when its entire artillery fell into the hands of the enemy, panic set in and the Danes retreated towards the town of Stade.",
        imageUrl: "https://tabletopdeutschland.files.wordpress.com/2015/06/lutter-am-barenberge-26.jpg",
        result: "Imperial Victory",
        year: "1626",
        date: "27 August 1626",
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
        prelude: "The defeat of Ernst von Mansfeld and Christian IV of Denmark by Albrecht von Wallenstein and Tilly, respectively, led to Christian's expulsion from North Germany. This left the Duchy of Pomerania, which included Stralsund, vulnerable. It declared neutrality and was occupied by Imperial forces led by Albrecht von Wallenstein. Stralsund refused to submit and was besieged by Wallenstein's forces. It sought military aid from Denmark, and then from Sweden",
        name: "Siege of Stralsund",
        description: "Wallenstein organised regular attacks on the city's fortifications, which were defended by Sottish mercenaries under the employment of the Danish. Wallenstein's forces successfully captured the outer regions of the fortifications, then proceeded to bombard the city with artillery. The city later received reinforcements via swedish boats filled with Danish-scottish troops who immediately joined the defence of the city. Heavy rainfall during late july turned the battlefield into a marsh, making the attacker's situation untenable. Wallenstein ended the siege on 4th August",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Belagerung_Stralsunds_durch_Wallenstein_2.jpg/1000px-Belagerung_Stralsunds_durch_Wallenstein_2.jpg",
        result: "Anti-Imperial victory",
        year: "1628",
        date: "May to 4 August 1628",
        latitude: "54.309167",
        longitude: "13.081944",
        army_one: JSON.stringify({
          beligerents:[["Holy Roman Empire", hre]],
          commanders: [["Albrecht von Wallenstein",hre],["Hans Georg von Arnim",hre]],
          strength: {number: 0, guns: 0},
          casualties: "unknown"
        }),
        army_two: JSON.stringify({
          beligerents:[["Denmark-Norway",denmarkNorway],["Kingdom of Sweden",swedish],["Stralsund",stralsund]],
          commanders: [["Heinrich Holk", denmarkNorway ],["Alexander Seaton",scots ],["Alexander Lindsay",scots ],["Robert Munro",scots ],["Alexander Leslie",swedish ]],
          strength: {number:7300 , guns: 0},
          casualties: "unknown"
        }),
        questions: JSON.stringify({
          question1: {
            text: "What weather made the battlefield/attacker's situation untenable",
            answerOptions:[
              {answerText: "Heavy snow", isCorrect:false},
              {answerText: "Heavy wind", isCorrect:false},
              {answerText: "Heavy rainfall", isCorrect:true},
            ]
          },
          question2: {
            text: "Which nation did the scots fight for?",
            answerOptions:[
              {answerText: "The Danish", isCorrect:false},
              {answerText: "The Swedish", isCorrect:true},
              {answerText: "The Spanish", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "Protestant Sweden's entrance into the war, led by king Gustavus Adolphus, in 1630 was considered a minor annoyance to the Catholic league and its allies. German protestant princes also showed little interest in joining the Swedish cause. The sacking and massacre of the sweden-allied city of Magdeburg by Imperial troops proved to be a valuable recruiting tool for the swedes, attracting french, prussian and German princly support for the swedish cause. In order for the swedes to attack imperial troops in the south, they needed to pass through saxony. In order for Imperial forces to attack the swedes, they too had to pass through saxony.",
        name: "Breitenfeld",
        description: "The armies drew up on a plain near the village of Breitenfeld, a few miles outside the walls of Leipzig. At first, von Pappenheim’s reckless gamble seemed about to pay off: at the first charge of his cavalry, the raw Saxon levies broke and fled the field. However, Gustavus nimbly turned his line to prevent Imperial forces attacking his rear. A daring Swedish cavalry raid captured all of the Imperial artillery, which was turned against its owners. Artillery pounded the Imperial forces until night fell. Imperial armies were utterly destroyed, losing two-thirds of their men and all their artillery and supplies. In a stroke, Gustavus had made himself master of Germany.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Gustave_Adolphe_at_Breitenfeld-Johann_Walter-f3706497.jpg/1280px-Gustave_Adolphe_at_Breitenfeld-Johann_Walter-f3706497.jpg",
        result: "Swedish-Saxon Anti-imperial victory",
        year: "1631",
        date: "17 september 1631",
        latitude: "51.417778",
        longitude: "12.377778",
        army_one: JSON.stringify({
          beligerents:[["Holy Roman Empire", hre],["Catholic League", catholic]],
          commanders: [["Count of Tilly",hre],["Gottfried von Pappenheim", hre],["Egon von Furstenberg", hre ]],
          strength: {number:37000, guns: 27},
          casualties: "16,000 dead or captured"
        }),
        army_two: JSON.stringify({
          beligerents:[["Swedish Empire",swedish],["Saxony",saxony]],
          commanders: [["Gustavus Adolphus",swedish ],["Gustav Horn",swedish ],["Johan Baner", swedish],["Lennart Torstensson",swedish ],["John George I",saxony ],["Hans Georg von Arnim",saxony ]],
          strength: {number: 39000, guns: 56},
          casualties: "5,100 dead"
        }),
        questions: JSON.stringify({
          question1: {
            text: "The sacking of what city rallied support to the swedish cause?",
            answerOptions:[
              {answerText: "Mecklenburg", isCorrect:false},
              {answerText: "Morenburg", isCorrect:false},
              {answerText: "Magdeburg", isCorrect:true},
            ]
          },
          question2: {
            text: "Which army was utterly destroyed?",
            answerOptions:[
              {answerText: "The Imperial army", isCorrect:false},
              {answerText: "The Swedish army", isCorrect:true},
              {answerText: "The dutch army", isCorrect:false},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "Gustavus Adolphus's victories at Breitenfeld in 1631, and Rain in 1632, drew him deep into Southern Germany where an attack on the imperial camp outside the city of Furth was bloodily repulsed by Albrecht von Wallenstein. The swedes later made contact with Wallenstein's troops at Halle, then at a stream 5-6 kilometres south of the city of Lutzen. Wallenstein requested reinforcements while the swedes camped 2 kilometres outside the town. Imperial troops worked through the night building defensive positions.",
        name: "Lutzen",
        description: "The first part of the battle featured a series of frontal attacks by the Swedes, which nearly succeeded before it was repulsed by a cavalry charge led by Pappenheim. While trying to reform his shattered infantry, Gustavus was killed in a skirmish with Imperial troops, but his subordinates rallied their men and supported by close range artillery fire overran the Imperial centre just before nightfall. Wallenstein withdrew in good order but had to abandon his wounded, many of his guns and most of his supply train. Despite the loss of their king, the Swedes continued the war under the direction of Axel Oxenstierna and, together with their German allies, formed the Heilbronn League in April 1633. ",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Death_of_King_Gustav_II_Adolf_of_Sweden_at_the_Battle_of_L%C3%BCtzen_%28Carl_Wahlbom%29_-_Nationalmuseum_-_18031.tif/lossy-page1-1280px-Death_of_King_Gustav_II_Adolf_of_Sweden_at_the_Battle_of_L%C3%BCtzen_%28Carl_Wahlbom%29_-_Nationalmuseum_-_18031.tif.jpg",
        result: "Swedish anti-imperial victory",
        year: "1632",
        date: "16 November 1632",
        latitude: "51.25",
        longitude: "12.133333",
        army_one: JSON.stringify({
          beligerents:[["Holy Roman Empire",hre],["Catholic League",catholic]],
          commanders: [["Albrecht von Wallenstein",hre],["Graf von Pappenheim",hre],["Heinrich Holk",hre ]],
          strength: {number: 19175, guns: 43},
          casualties: "5,160 killed, wounded or Captured.\n 24 guns & 20 ammunition wagons captured"
        }),
        army_two: JSON.stringify({
          beligerents:[["Sweden",swedish],["Saxony",saxony],["Hesse-Kassel",hesseKassel]],
          commanders: [["Gustavus Adolphus",swedish ],["Bernard of Saxe-Weimar",swedish ],["Dodo van Knyphausen", swedish]],
          strength: {number: 18738, guns: 60},
          casualties: ""
        }),
        questions: JSON.stringify({
          question1: {
            text: "Did Gustavus Adolphus survive the battle",
            answerOptions:[
              {answerText: "No", isCorrect:true},
              {answerText: "Yes", isCorrect:false},
              {answerText: "Unknown", isCorrect:false},
            ]
          },
          question2: {
            text: "The swedes and their german allies formed which league after the battle?",
            answerOptions:[
              {answerText: "Dusseldorf league", isCorrect:false},
              {answerText: "Christian league", isCorrect:false},
              {answerText: "Heilbronn league", isCorrect:true},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "A string of protestant defeats led France to intervene and declare war on the Habsburgs (Holy Roman Empire) and spanish empire on 19th May 1635, to limit Habsburg power. This was despite France being a Catholic power which suppressed its own Protestant rebellions. An initial invasion of the spanish netherlands ended in failure, witht the french retreating to their borders. A french defeat at the Battle of Honnecourt in 1642 opened the way to paris, spanish troops under Francisco de melo laid siege to the fortified town of Rocroi. 21 year old Louis de Bourbon, Prince of Condé, was appointed to stop him",
        name: "Rocroi",
        description: "The battle began with a French cavalry attack which pushed back and scattered the opposing Spanish cavalry. An unauthorised french cavalry atack on the spanish was repulsed, with the spanish mounting a counteer attack which was later stopped by the french. Louis Conde's cavalry encircled the spanish and crashed through their rear, scattering the Spanish cavalry and artillery crews. The trapped and encircled spanish infantry held their ground and were pummeled with french artillery and captured spanish guns. Impressed with the bravery of the spanish troops, Conde offered the option of surrender which the spanish accepted. However upon riding towards them to accept their surrender, confused spanish troops opened fire on the prince, who was able to retreat. French forces responded with a devastating attack in whch the Spanish army was virtually destroyed.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Rocroi.jpg",
        result: "",
        year: "1643",
        date: "19 May 1643",
        latitude: "49.919444",
        longitude: "4.527778",
        army_one: JSON.stringify({
          beligerents:[["Spanish Empire",spanish]],
          commanders: [["Francisco de Melo",spanish],["Duque de Alburquerque",spanish],["Conde Fontana", spanish ],["Graf von Isenburg",spanish]],
          strength: {number: 27000, guns: 18},
          casualties: "8,000 dead or wounded, 7000 captured, 18 guns"
        }),
        army_two: JSON.stringify({
          beligerents:[["Kingdom of France", france]],
          commanders: [["Louis II de Bourbon", france ],[" Marquis de La Ferte", france ],["Marquis d'Espenan",france],["Comte de Gassion", france]],
          strength: {number: 23000, guns: 14},
          casualties: "4000 dead or wounded"
        }),
        questions: JSON.stringify({
          question1: {
            text: "What stopped Louis de Conde from allowing the isolated Spanish infantry to surrender?",
            answerOptions:[
              {answerText: "His advisors", isCorrect:false},
              {answerText: "Being fired on by spanish forces when riding to accept their surrender", isCorrect:true},
              {answerText: "A bad omen earlier in the day", isCorrect:false},
            ]
          },
          question2: {
            text: "Why did France enter the war on the side of the Protestants?",
            answerOptions:[
              {answerText: "To gain land from Spain", isCorrect:false},
              {answerText: "Their alliance with protestant Sweden", isCorrect:false},
              {answerText: "To limit the influence and power of the Habsburgs", isCorrect:true},
            ]
          },
         
        }),
        createdAt: new Date(),
        updatedAt: new Date()
        //END OF BATTLE OBJECT
      },
      {
        // START OF BATTLE OBJECT
        prelude: "After Breitenfeld, the french suffered a considerable defeat in 1643, at the battle of Tuttlingen against Bavarian, imperial and Spanish troops led by Franz von mercy and Johanne Von Werth.The French army was ambushed and destroyed, with casualties of 11,000 men killed or wounded. The french were forced to recall Field Marshal Viscomte De Turenne to handle the war in Germany. The Duke of Bavaria decided to capitalise on the weaknened french situation by sending Von Mercy and his troops towards Turenne, near Freiburg. Von Mercy's larger and organised force forced the French Garrison to hand over the city. Louis de Conde was dispatched with an army to protect and/or retake the city",
        name: "Freiburg",
        description: "The 3rd of August saw an attempted two-pronged French attack, with Turenne attempting a flanking attack an Louis conde attempting a frontal atack. The french suffered heavy casualties and both attacks were halted due to rain and nightfall. The 5th of August saw the french lose approximately half their army due to repeated waves of uncoordinated attacks, capitalised on by Von Mercy's forces. The 9th of August saw the french try to cut off Bavarian supplies, however they were outmaneuvered by Von mercy who relocated his army to secure supplies and ammunition. The Bavarians were able to perform a successful fighting retreat to Villingen, without losing many casualties.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/H._Grobet_-_Cond%C3%A9_%C3%A0_la_bataille_de_Fribourg-en-Brisgau_%281644%29.jpg/1024px-H._Grobet_-_Cond%C3%A9_%C3%A0_la_bataille_de_Fribourg-en-Brisgau_%281644%29.jpg",
        result: "Disputed",
        year: "1644",
        date: " 3,5 and 9 August 1644",
        latitude: "47.9955",
        longitude: "7.8522",
        army_one: JSON.stringify({
          beligerents:[["Holy Roman Empire",hre],["Electorate of Bavaria",bavaria]],
          commanders: [["Franz von Mercy",bavaria]],
          strength: {number: 16800, guns: 20},
          casualties: "2500-6800"
        }),
        army_two: JSON.stringify({
          beligerents:[["Kingdom of France",france]],
          commanders: [["Louis de Bourbon",france ],["Vicomte de Turenne", france ]],
          strength: {number: 20000, guns: 37},
          casualties: "5000-8000"
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
