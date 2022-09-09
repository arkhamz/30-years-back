"use strict";

const bavaria = "https://i.imgur.com/NIAPLwO.png";
const bohemia = "https://i.imgur.com/ambnSQo.png";
const catholic = "https://i.imgur.com/ZCgBFLP.png";
const denmarkNorway = "https://i.imgur.com/FQeo5f8.png";
const dutch = "https://i.imgur.com/jfQwEFH.png";
const hesseKassel = "https://i.imgur.com/Bjss5NF.png";
const hre = "https://i.imgur.com/zg6kPGq.png";
const palatinate = "https://i.imgur.com/EUhXyJs.png";
const prussia = "https://i.imgur.com/MhOhYWI.png";
const savoyard = "https://i.imgur.com/7e7ZCCm.png";
const saxony = "https://i.imgur.com/HN6zfXR.png";
const spanish = "https://i.imgur.com/aGJkxBf.png";
const swedish = "https://i.imgur.com/FWz9l1C.png";
const transylvania = "https://i.imgur.com/VCixQ1F.png";
const stralsund = "https://i.imgur.com/xrwFSE0.png";
const scots = "https://i.imgur.com/a6fwxWi.png";
const france = "https://i.imgur.com/YQXUCFz.png";
const jankauPic = "https://i.imgur.com/Oi5xDdV.jpg";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "battles",
      [
        {
          // START OF BATTLE OBJECT
          name: "White Mountain",
          prelude:
            "The naming of the fiercely devout Roman catholic Ferdinand II as Holy Roman Emperor and king of Bohemia (czechia), led to the mostly protestant population of Bohemia fearing the loss of religious freedom, rights and autonomy. In response to perceived violations of royal assurances of religious freedom, a group of Bohemian noblemen met with representatives of the emperor at the royal Prague castle. The meeting ended with the Royal representatives being thrown out of a window and seriously injured upon landing on a large pile of manure, sparking the Bohemian revolt. Emperor Ferdinand II set out to conquer Bohemia and quash the rebellion, with an army under Field Marshal Tilly.",
          description:
            "A small imperial force was sent to probe the protestant rear, causing the surprised Bohemians to retreat. Tilly quickly sent in reinforcements, causing the Bohemian rear forces to crumble. The protestant Christian II, prince of Anhalt-Bernburg, tried to support his bohemian allies with a cavalry charge, but it was countered by Tilly's cavalry and repelled. The Bohemian infantry, only now approaching the imperial army, retreated after seeing their cavalry retreating. The protestant army scattered, the battle lasting only one hour.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/0/02/The_Battle_of_White_Mountain_%28by_Peter_Snayers%29.jpg",
          videoUrl:
            "https://www.youtube.com/embed/ZIEU_um0GfQ",
          result: "Catholic Imperial-Spanish victory",
          year: 1620,
          date: "8 November 1620",
          latitude: 50.078333,
          longitude: 14.319444,
          armyOne: JSON.stringify({
            beligerents: [
              ["Holy Roman Empire", hre],
              ["Catholic League", catholic],
              ["Spanish empire", spanish],
            ],
            commanders: [
              ["Johann von Tilly", catholic],
              ["Maximilian I", catholic],
              ["Charles de Bucquoy", hre],
            ],
            strength: { number: 23000, guns: 12 },
            casualties: "650 killed and wounded",
          }),
          armyTwo: JSON.stringify({
            beligerents: [
              ["Bohemian Confederation", bohemia],
              ["Electoral Palatinate", palatinate],
            ],
            commanders: [
              ["Christian of Anhalt", palatinate],
              ["Jindřich Matyáš Thurn", bohemia],
            ],
            strength: { number: 21000, guns: 10 },
            casualties: "2,800 killed and wounded",
          }),
          questions: JSON.stringify({
            question1: {
              text: "How long did the battle last?",
              answerOptions: [
                { answerText: "3 hours", isCorrect: false },
                { answerText: "1 hour", isCorrect: true },
                { answerText: "4 hours", isCorrect: false },
              ],
            },
            question2: {
              text: "What triggered the rebellion?",
              answerOptions: [
                { answerText: "Lack of food", isCorrect: false },
                {
                  answerText:
                    "Protestants throwing catholic imperial representatives out of a castle window",
                  isCorrect: true,
                },
                { answerText: "religious harmony", isCorrect: false },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
        {
          // START OF BATTLE OBJECT
          name: "Lutter",
          prelude:
            "Christian IV of Denmark, ruler of the Duchy of Holstein ( a part of the holy roman empire) and member of the protestant Lower Saxon circle, remained neutral during the early stages of the war, following the Bohemian revolt. He and the other members increasingly feared that Holy Roman Emperor Ferdinand intended to retake former catholic lands in North-West Germany, now held by protestants. This fear was confirmed when Catholic league forces led by the Count of Tilly, and an Imperial army under Albrecht von Wallenstein, attacked Magdeburg. Christian was appointed commander of the saxon forces, with Ernst von Mansfeld and Christian of Brunswick as fellow commanders.",
          description:
            "The Danish-German army led by Christian abandoned their attempt to assist nearby protestant fortresses at Munden, Northeim and Gottingem, following their capture by the count of Tilly and his forces. After harrassment by Tilly's cavalry, Christian decided to make a stand at Lutter am Barenberge. The imperial infantry broke through the Danish line on three occasions but each time was repulsed by a cavalry counter-attack. Eventually, the Danish army was no longer able to maintain its ground and when its entire artillery fell into the hands of the enemy, panic set in and the Danes retreated towards the town of Stade.",
          imageUrl:
            "https://i.imgur.com/6DVHDkM.jpg",
          videoUrl:
            "https://www.youtube.com/embed/GDd_2tbt_A8",
          result: "Imperial Victory",
          year: 1626,
          date: "27 August 1626",
          latitude: 51.99,
          longitude: 10.271111,
          armyOne: JSON.stringify({
            beligerents: [
              ["Holy Roman Empire", hre],
              ["Catholic League", catholic],
            ],
            commanders: [
              ["Count of Tilly", hre],
              ["Graf Anholt", hre],
            ],
            strength: { number: 24000, guns: 22 },
            casualties: "2,000 dead or wounded",
          }),
          armyTwo: JSON.stringify({
            beligerents: [["Denmark-Norway", denmarkNorway]],
            commanders: [
              ["Christian IV", denmarkNorway],
              ["Philip of Hesse-Kassel", denmarkNorway],
              ["Fuchs von Bimbach", denmarkNorway],
            ],
            strength: { number: 21000, guns: 20 },
            casualties: "4,000 dead or wounded, 3,000 captured",
          }),
          questions: JSON.stringify({
            question1: {
              text: "What did Christian IV and his fellow lower saxon circle members fear the emperor might do?",
              answerOptions: [
                {
                  answerText:
                    "Confiscate protestant lands in north-west germany",
                  isCorrect: true,
                },
                { answerText: "Increase taxes", isCorrect: false },
                { answerText: "Forbid the raising of pigs", isCorrect: false },
              ],
            },
            question2: {
              text: "What caused Danish forces to panic and retreat",
              answerOptions: [
                { answerText: "A bigger, more devout army", isCorrect: false },
                {
                  answerText: "The capture of their artillery guns",
                  isCorrect: true,
                },
                { answerText: "The capture of their camp", isCorrect: false },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
        {
          // START OF BATTLE OBJECT
          name: "Siege of Stralsund",
          prelude:
            "The defeat of Ernst von Mansfeld and Christian IV of Denmark by Albrecht von Wallenstein and Tilly, respectively, led to Christian's expulsion from North Germany. This left the Duchy of Pomerania, which included Stralsund, vulnerable. It declared neutrality and was occupied by Imperial forces led by Albrecht von Wallenstein. Stralsund refused to submit and was besieged by Wallenstein's forces. It sought military aid from Denmark, and then from Sweden",
          description:
            "Wallenstein organised regular attacks on the city's fortifications, which were defended by Sottish mercenaries under the employment of the Danish. Wallenstein's forces successfully captured the outer regions of the fortifications, then proceeded to bombard the city with artillery. The city later received reinforcements via swedish boats filled with Danish-scottish troops who immediately joined the defence of the city. Heavy rainfall during late july turned the battlefield into a marsh, making the attacker's situation untenable. Wallenstein ended the siege on 4th August",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Belagerung_Stralsunds_durch_Wallenstein_2.jpg/1000px-Belagerung_Stralsunds_durch_Wallenstein_2.jpg",
          videoUrl:
            "https://www.youtube.com/embed/GDd_2tbt_A8",
          result: "Anti-Imperial victory",
          year: 1628,
          date: "May to 4 August 1628",
          latitude: 54.309167,
          longitude: 13.081944,
          armyOne: JSON.stringify({
            beligerents: [["Holy Roman Empire", hre]],
            commanders: [
              ["Albrecht von Wallenstein", hre],
              ["Hans Georg von Arnim", hre],
            ],
            strength: { number: 0, guns: 0 },
            casualties: "unknown",
          }),
          armyTwo: JSON.stringify({
            beligerents: [
              ["Denmark-Norway", denmarkNorway],
              ["Kingdom of Sweden", swedish],
              ["Stralsund", stralsund],
            ],
            commanders: [
              ["Heinrich Holk", denmarkNorway],
              ["Alexander Seaton", scots],
              ["Alexander Lindsay", scots],
              ["Robert Munro", scots],
              ["Alexander Leslie", swedish],
            ],
            strength: { number: 7300, guns: 0 },
            casualties: "unknown",
          }),
          questions: JSON.stringify({
            question1: {
              text: "What weather made the battlefield/attacker's situation untenable",
              answerOptions: [
                { answerText: "Heavy snow", isCorrect: false },
                { answerText: "Heavy wind", isCorrect: false },
                { answerText: "Heavy rainfall", isCorrect: true },
              ],
            },
            question2: {
              text: "Which nation did the scots fight for?",
              answerOptions: [
                { answerText: "The Danish", isCorrect: false },
                { answerText: "The Swedish", isCorrect: true },
                { answerText: "The Spanish", isCorrect: false },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
        {
          // START OF BATTLE OBJECT
          name: "Breitenfeld",
          prelude:
            "Protestant Sweden's entrance into the war, led by king Gustavus Adolphus, in 1630 was considered a minor annoyance to the Catholic league and its allies. German protestant princes also showed little interest in joining the Swedish cause. The sacking and massacre of the sweden-allied city of Magdeburg by Imperial troops proved to be a valuable recruiting tool for the Swedes, attracting French, Prussian and German princly support for the swedish cause. In order for the Swedes to attack imperial troops in the south, they needed to pass through saxony. In order for Imperial forces to attack the swedes, they too had to pass through saxony.",
          description:
            "The armies drew up on a plain near the village of Breitenfeld, a few miles outside the walls of Leipzig. At first, von Pappenheim’s reckless gamble seemed about to pay off: at the first charge of his cavalry, the raw Saxon levies broke and fled the field. However, Gustavus nimbly turned his line to prevent Imperial forces attacking his rear. A daring Swedish cavalry raid captured all of the Imperial artillery, which was turned against its owners. Artillery pounded the Imperial forces until night fell. Imperial armies were utterly destroyed, losing two-thirds of their men and all their artillery and supplies. In one stroke, Gustavus had made himself master of Germany.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Gustave_Adolphe_at_Breitenfeld-Johann_Walter-f3706497.jpg/1280px-Gustave_Adolphe_at_Breitenfeld-Johann_Walter-f3706497.jpg",
          videoUrl:
            "https://www.youtube.com/embed/56mj5OqcqdU",
          result: "Swedish-Saxon Anti-imperial victory",
          year: 1631,
          date: "17 september 1631",
          latitude: 51.417778,
          longitude: 12.377778,
          armyOne: JSON.stringify({
            beligerents: [
              ["Holy Roman Empire", hre],
              ["Catholic League", catholic],
            ],
            commanders: [
              ["Count of Tilly", hre],
              ["Gottfried von Pappenheim", hre],
              ["Egon von Furstenberg", hre],
            ],
            strength: { number: 37000, guns: 27 },
            casualties: "16,000 killed or captured",
          }),
          armyTwo: JSON.stringify({
            beligerents: [
              ["Swedish Empire", swedish],
              ["Saxony", saxony],
            ],
            commanders: [
              ["Gustavus Adolphus", swedish],
              ["Gustav Horn", swedish],
              ["Johan Baner", swedish],
              ["Lennart Torstensson", swedish],
              ["John George I", saxony],
              ["Hans Georg von Arnim", saxony],
            ],
            strength: { number: 39000, guns: 56 },
            casualties: "5,100 killed",
          }),
          questions: JSON.stringify({
            question1: {
              text: "The sacking of what city rallied support to the swedish cause?",
              answerOptions: [
                { answerText: "Mecklenburg", isCorrect: false },
                { answerText: "Morenburg", isCorrect: false },
                { answerText: "Magdeburg", isCorrect: true },
              ],
            },
            question2: {
              text: "Which army was utterly destroyed by the end of the battle?",
              answerOptions: [
                { answerText: "The Imperial army", isCorrect: false },
                { answerText: "The Swedish army", isCorrect: true },
                { answerText: "The dutch army", isCorrect: false },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
        {
          // START OF BATTLE OBJECT
          name: "Lutzen",
          prelude:
            "Gustavus Adolphus's victories at Breitenfeld in 1631, and Rain in 1632, drew him deep into Southern Germany where an attack on the imperial camp outside the city of Furth was bloodily repulsed by Albrecht von Wallenstein's imperial army. The swedes later made contact with Wallenstein's troops at Halle, then at a stream 5-6 kilometres south of the city of Lutzen. Wallenstein requested reinforcements while the swedes camped 2 kilometres outside the town. Imperial troops worked through the night building defensive positions.",
          description:
            "The first part of the battle featured a series of frontal attacks by the Swedes, which nearly succeeded before it was repulsed by a cavalry charge led by Pappenheim. While trying to reform his shattered infantry, Gustavus was killed in a skirmish with Imperial troop. His subordinates rallied their men and, supported by close range artillery fire, overran the Imperial centre just before nightfall. Wallenstein withdrew in good order but had to abandon his wounded, many of his guns and most of his supply train. Despite the loss of their king, the Swedes continued the war under the direction of Axel Oxenstierna and, together with their German allies, formed the Heilbronn League in April 1633.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Death_of_King_Gustav_II_Adolf_of_Sweden_at_the_Battle_of_L%C3%BCtzen_%28Carl_Wahlbom%29_-_Nationalmuseum_-_18031.tif/lossy-page1-1280px-Death_of_King_Gustav_II_Adolf_of_Sweden_at_the_Battle_of_L%C3%BCtzen_%28Carl_Wahlbom%29_-_Nationalmuseum_-_18031.tif.jpg",
          videoUrl:
            "https://www.youtube.com/embed/gvbM9xO5LWI",
          result: "Swedish anti-imperial victory",
          year: 1632,
          date: "16 November 1632",
          latitude: 51.25,
          longitude: 12.133333,
          armyOne: JSON.stringify({
            beligerents: [
              ["Holy Roman Empire", hre],
              ["Catholic League", catholic],
            ],
            commanders: [
              ["Albrecht von Wallenstein", hre],
              ["Graf von Pappenheim", hre],
              ["Heinrich Holk", hre],
            ],
            strength: { number: 19175, guns: 43 },
            casualties: "5,160 killed, wounded or Captured.",
          }),
          armyTwo: JSON.stringify({
            beligerents: [
              ["Sweden", swedish],
              ["Saxony", saxony],
              ["Hesse-Kassel", hesseKassel],
            ],
            commanders: [
              ["Gustavus Adolphus", swedish],
              ["Bernard of Saxe-Weimar", swedish],
              ["Dodo van Knyphausen", swedish],
            ],
            strength: { number: 18738, guns: 60 },
            casualties: "6000 killed or wounded",
          }),
          questions: JSON.stringify({
            question1: {
              text: "Did Swedish King Gustavus Adolphus survive the battle?",
              answerOptions: [
                { answerText: "No", isCorrect: true },
                { answerText: "Yes", isCorrect: false },
                { answerText: "Unknown", isCorrect: false },
              ],
            },
            question2: {
              text: "The Swedes and their German allies formed which league after the battle?",
              answerOptions: [
                { answerText: "Dusseldorf league", isCorrect: false },
                { answerText: "Christian league", isCorrect: false },
                { answerText: "Heilbronn league", isCorrect: true },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
        {
          // START OF BATTLE OBJECT
          name: "Rocroi",
          prelude:
            "A string of protestant defeats led France to intervene on the side of the protestants and declare war on the Habsburgs (Holy Roman Empire), and Spanish empire on 19th May 1635, to limit Habsburg power. This was despite France being a Catholic power which suppressed its own Protestant rebellions. An initial invasion of the Spanish netherlands ended in failure, with the French retreating to their borders. The peace of Prague in 1935 also saw most of the rebellious German protestant states exit the war. The French defeat at the Battle of Honnecourt in 1642 opened the way to paris, Spanish troops under Francisco de melo laid siege to the fortified town of Rocroi. 21 year old Louis de Bourbon, Prince of Condé, was appointed to stop him",
          description:
            "The battle began with a French cavalry attack which pushed back and scattered the opposing Spanish cavalry. An unauthorised french cavalry atack on the spanish was repulsed, with the spanish mounting a counter-attack which was later stopped by the french. Louis Condé's cavalry encircled the spanish and crashed through their rear, scattering the Spanish cavalry and artillery crews. The trapped and encircled spanish infantry held their ground and were pummeled with french artillery and captured spanish guns. Impressed with the bravery of the spanish troops, Condé offered the option of surrender, which the spanish accepted. However, upon riding toward the Spanish troops to accept their surrender, confused spanish troops opened fire on the prince, who was able to retreat. French forces responded with a devastating attack in whch the Spanish army was virtually destroyed.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/9/9f/Rocroi.jpg",
          videoUrl:
            "https://www.youtube.com/embed/zamiibdAyfw",
          result: "French victory",
          year: 1643,
          date: "19 May 1643",
          latitude: 49.919444,
          longitude: 4.527778,
          armyOne: JSON.stringify({
            beligerents: [["Spanish Empire", spanish]],
            commanders: [
              ["Francisco de Melo", spanish],
              ["Duque de Alburquerque", spanish],
              ["Condé Fontana", spanish],
              ["Graf von Isenburg", spanish],
            ],
            strength: { number: 27000, guns: 18 },
            casualties: "8,000 killed or wounded, 7000 captured",
          }),
          armyTwo: JSON.stringify({
            beligerents: [["Kingdom of France", france]],
            commanders: [
              ["Louis prince de Condé", france],
              [" Marquis de La Ferte", france],
              ["Marquis d'Espenan", france],
              ["Comte de Gassion", france],
            ],
            strength: { number: 23000, guns: 14 },
            casualties: "4000 killed or wounded",
          }),
          questions: JSON.stringify({
            question1: {
              text: "What stopped Louis prince de Condé from allowing the isolated Spanish infantry to surrender?",
              answerOptions: [
                { answerText: "His advisors", isCorrect: false },
                {
                  answerText:
                    "Being fired on by spanish forces when riding to accept their surrender",
                  isCorrect: true,
                },
                {
                  answerText: "A bad omen earlier in the day",
                  isCorrect: false,
                },
              ],
            },
            question2: {
              text: "Why did France enter the war on the side of the Protestants?",
              answerOptions: [
                { answerText: "To gain land from Spain", isCorrect: false },
                {
                  answerText: "Their alliance with protestant Sweden",
                  isCorrect: false,
                },
                {
                  answerText:
                    "To limit the influence and power of the Habsburgs",
                  isCorrect: true,
                },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
        {
          // START OF BATTLE OBJECT
          prelude:
            "After Breitenfeld, the french suffered a considerable defeat in 1643, at the battle of Tuttlingen against Bavarian, imperial and Spanish troops led by Franz von mercy and Johanne Von Werth.The French army was ambushed and destroyed, with casualties of 11,000 men killed or wounded. The french were forced to recall Field Marshal Viscomte De Turenne to handle the war in Germany. The Duke of Bavaria decided to capitalise on the weakened french situation by sending Von Mercy and his troops towards Turenne, near Freiburg. Von Mercy's larger and organised force forced the French Garrison to hand over the city. Louis de Condé was dispatched with an army to protect and/or retake the city",
          name: "Freiburg",
          description:
            "The 3rd of August saw an attempted two-pronged French attack, with Turenne attempting a flanking attack an Louis Condé attempting a frontal atack. The french suffered heavy casualties and both attacks were halted due to rain, nightfall and Bavarian resistance. The 5th of August saw the french lose approximately half their army due to repeated waves of uncoordinated attacks, capitalised on by Von Mercy's forces. The 9th of August saw the french try to cut off Bavarian supplies, however they were outmaneuvered by Von mercy who had already secretly relocated his main army to secure supplies and ammunition. The Bavarians were able to perform a successful fighting retreat to Villingen, without losing many casualties.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/H._Grobet_-_Cond%C3%A9_%C3%A0_la_bataille_de_Fribourg-en-Brisgau_%281644%29.jpg/1024px-H._Grobet_-_Cond%C3%A9_%C3%A0_la_bataille_de_Fribourg-en-Brisgau_%281644%29.jpg",
          videoUrl:
            "https://www.youtube.com/embed/nDTjr2UjLl0",
          result: "Disputed",
          year: 1644,
          date: " 3,5 and 9 August 1644",
          latitude: 47.9955,
          longitude: 7.8522,
          armyOne: JSON.stringify({
            beligerents: [
              ["Holy Roman Empire", hre],
              ["Electorate of Bavaria", bavaria],
            ],
            commanders: [["Franz von Mercy", bavaria]],
            strength: { number: 16800, guns: 20 },
            casualties: "2500-6800 killed or wounded",
          }),
          armyTwo: JSON.stringify({
            beligerents: [["Kingdom of France", france]],
            commanders: [
              ["Louis prince de Condé", france],
              ["Vicomte de Turenne", france],
            ],
            strength: { number: 20000, guns: 37 },
            casualties: "5000-8000 killed or wounded",
          }),
          questions: JSON.stringify({
            question1: {
              text: "What thwarted the two-pronged french attack on the 3rd August?",
              answerOptions: [
                {
                  answerText: "Rain, nightfall and Bavarian resistance",
                  isCorrect: true,
                },
                { answerText: "poor planning", isCorrect: false },
                { answerText: "Logistical issues", isCorrect: false },
              ],
            },
            question2: {
              text: "Was Von Mercy's army destroyed whilst retreating on the 9th August?",
              answerOptions: [
                { answerText: "Yes'", isCorrect: false },
                { answerText: "No", isCorrect: true },
                { answerText: "Unsure", isCorrect: false },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
        {
          // START OF BATTLE OBJECT
          name: "Jankau",
          prelude:
            "With the 1635 Treaty of Prague, most of Sweden's protestant German allies made peace. The war lost much of its religious aspect, and turned into a contest between the Holy Roman Empire, and the Swedish Empire supported by France and others. The Danes also re-enetered the war as an imperial ally. THe swedes, led by Lennart Torstensson began plans for an offensive wich would force Ferdinand III, Holy Roman Emperor, to agree to peace terms. While France attacked Bavaria, Torstensson would move into Bohemia then strike at the Imperial capital at Vienna.",
          description:
            "The morning of the battle saw a swedish army column under scotsman Robert Douglas attempt a diversionary attack against the Imperial army's right. After leaving to assess this swedish move, Imperial commander Von Hatzfeldt found that his subordinate Von Gotzen, had misinterpreted his orders while he had gone, moving his entire force to a hill and getting stuck in the woods, allowing the swedes time to place artillery guns and infantry near them. After a furious argument, von Gotzen launched numerous attacks at the swedes, which were repulsed with heavy losses, until he himself was killed and his troops retreated. Hatzfeld held his position until nightfall, prompting Torstensson to move his artillery closer and fire at close range at the helpless Imperial infantry. Von Werth's Imperial cavalry charged and scattered the Swedish right, before stopping to loot the swedish baggage train, where they also captured Torstensson's wife. The swedish cavalry regrouped and counter-attacked the distracted Imperials, inflicting heavy casualties. The isolated Imperial infantry surrendered, many prisoners were taken, including Imperial commander Von Hatzfeldt.",
          imageUrl: `${jankauPic}`,
          videoUrl:
            "https://www.youtube.com/embed/tPfrVjZ-X60",
          result: "Swedish anti-imperial victory",
          year: 1645,
          date: "6 March 1645",
          latitude: 49.6503,
          longitude: 14.7294,
          armyOne: JSON.stringify({
            beligerents: [["Holy Roman Empire", hre]],
            commanders: [
              ["Von Hatzfeldt", hre],
              ["Von Werth", bavaria],
              ["Von Gotzen", hre],
            ],
            strength: { number: 16000, guns: 26 },
            casualties: "4,000 killed or wounded, 4,450 captured",
          }),
          armyTwo: JSON.stringify({
            beligerents: [["Swedish Empire", swedish]],
            commanders: [
              ["Lennart Torstensson", swedish],
              ["Arvid Wittenberg", swedish],
              ["Mortaigne de Potelles", swedish],
              ["Robert Douglas", scots],
            ],
            strength: { number: 16000, guns: 60 },
            casualties: "3,000-4,000 killed or wounded",
          }),
          questions: JSON.stringify({
            question1: {
              text: "What type of attack did scotsman Robert Douglas try to do?",
              answerOptions: [
                { answerText: "A frontal charge", isCorrect: false },
                { answerText: "A diversionary attack", isCorrect: true },
                { answerText: "An artillery barrage", isCorrect: false },
              ],
            },
            question2: {
              text: "What distracted Von Werth's imperial cavalry?",
              answerOptions: [
                { answerText: "The swedish baggage train", isCorrect: true },
                { answerText: "An unknown army", isCorrect: false },
                { answerText: "A comet", isCorrect: false },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
        {
          // START OF BATTLE OBJECT
          name: "Nordlingen",
          prelude:
            " Upon reaching Kassel on July 1st, and managing to immediately insult his allied German commander Johann von Geyso, Louis II prince of Condé and the allied army moved to interrupt the Bavarians led by Von Mercy, who were besieging the strategically significant Hessian stronghold of Kirchheim to block off the french army in the area. The french approach forced them to break the siege, both armies then raced towards Heilbronn, with Condé's force arriving first and taking WImpfen. Both armies continued to the east,with Condé taking another city. Condé then turned south to threaten Bavaria, attempting to besiege DInkelsbuhl. Constant Bavarian cavalry raids forced Condé to attempt a direct attack on Von Mercy's bavarian army, but as the area was nt suited for a battle, the French troops marched towards Nordlingen, shadowed by von Mercy ",
          description:
            "An impatient Condé ordered the attack to start at 5PM, ignoring commander Turenne's advice to wait till dawn. The french center approached with their artillery guns towards the Bavarians, and were immediately devestated by artillery fire once in range. They were able to push through and capture a village, but were counter attacked by Mercy's men and artillery fire, ultimately causing them to route. A further attack with a smaller group, led by Condé himself, was shattered before reaching the enemy. By 7pm, most of the french center was destroyed. Von Mercy, on the verge of his greatest victory and ecstatic at the progress of the battle, was killed by a wayward cannonball. His second-in command failed to take control and destroy the french. The lack of coordination and overall strategy following Mercy's death led to french forces destroying the bavarian left and then pouncing on the disorganised center, triggering a general rout.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Nordlingen.jpg/1024px-Nordlingen.jpg",
          videoUrl:
            "https://www.youtube.com/embed/c0O6CRQiChA",
          result: "French victory",
          year: 1645,
          date: "August 3 1645",
          latitude: 48.805556,
          longitude: 10.485833,
          armyOne: JSON.stringify({
            beligerents: [
              ["Holy Roman Empire", hre],
              ["Electorate of Bavaria", bavaria],
            ],
            commanders: [
              ["Franz von Mercy", bavaria],
              ["Johann von Werth", hre],
            ],
            strength: { number: 16000, guns: 28 },
            casualties: "2,500 killed and wounded, 1,500 captured",
          }),
          armyTwo: JSON.stringify({
            beligerents: [
              ["Kingdom of France", france],
              ["Hesse-Kassel", hesseKassel],
            ],
            commanders: [
              ["Louis prince de Condé", france],
              ["Vicomte de Turenne", france],
              ["Johann von Geyso", hesseKassel],
            ],
            strength: { number: 17000, guns: 27 },
            casualties: "4000 killed or wounded",
          }),
          questions: JSON.stringify({
            question1: {
              text: "What caused Condé to attack before the allied French army had planned?",
              answerOptions: [
                { answerText: "Courage", isCorrect: false },
                { answerText: "French fury", isCorrect: false },
                { answerText: "Impatience", isCorrect: true },
              ],
            },
            question2: {
              text: "The death of what commander sealed the fate of the battle",
              answerOptions: [
                { answerText: "Louis prince de Condé", isCorrect: false },
                { answerText: "Von Mercy", isCorrect: true },
                { answerText: "Vicomte de Turenne", isCorrect: false },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
        {
          // START OF BATTLE OBJECT
          name: "Zusmarshausen",
          prelude:
            "By the late 1640s all the belligerents in the Thirty Years War were exhausted by three decades of brutal fighting. Delegates had convened in the Westphalian cities of Munster and Osnabruck to negotiate a peace treaty in 1646. While these peace talks were in progress, the opposing powers continued to jockey for position in order to improve their positions in the negotiations. Sweden was keen for a final decisive victory against the Habsburg monarchy in order to gain territory inside the Habsburg monarchy, and also to make the most of the war while it lasted by invading and plundering the rich Habsburg province of Bohemia, left relatively untouched by fighting so far",
          description:
            "The battle began at 7, when Montecuccoli's troops in Zusmarshausen came under attack from the Swedish vanguard. Montecuccoli held off the Swedish attacks for an hour before ordering his men to pull back eastward to the village of Herpfenried, where they mounted another stand. This time, however, a group of French cavalry managed to work their way round the southern side of Montecuccoli's position, threatening to cut him off from the rest of the Imperial-Bavarian army. Melander himself dashed back to rescue the rearguard, and in the resulting melee the general was shot in the chest and killed. Montecuccoli managed to extract his surviving men and rejoin Gronsfeld and the rest of the army. Under cover of darkness, Gronsfeld and the imperial forces retreated to Augsburg,,",
          imageUrl:
            "https://i.pinimg.com/originals/eb/5d/2a/eb5d2a4c4ea50a59b442cc617dd3442e.jpg",
          videoUrl:
            "https://www.youtube.com/embed/7aDHH9Ot-Cw",
          result: "Franco-Swedish victory",
          year: 1648,
          date: "17 May 1648",
          latitude: 48.4002,
          longitude: 10.5967,
          armyOne: JSON.stringify({
            beligerents: [
              ["Electorate of Bavaria", bavaria],
              ["Holy Roman Empire", hre],
            ],
            commanders: [
              ["Peter Melander von Holzappel", hre],
              ["Raimondo Montecuccoli", hre],
              ["Jost Maximilian von Bronckhorst-Gronsfeld", bavaria],
            ],
            strength: { number: 15370, guns: 0 },
            casualties: "1,897 killed or wounded",
          }),
          armyTwo: JSON.stringify({
            beligerents: [
              ["Swedish Empire", swedish],
              ["Kingdom of France", france],
            ],
            commanders: [
              ["Vicomte de Turenne", france],
              ["Carl Gustaf Wrangel", swedish],
            ],
            strength: { number: 22000, guns: 0 },
            casualties: "More than 500 killed or wounded",
          }),
          questions: JSON.stringify({
            question1: {
              text: "Why was Sweden keen for a final decisive victory against the Habsburgs?",
              answerOptions: [
                {
                  answerText: "A better negotiation position at peace talks",
                  isCorrect: false,
                },
                { answerText: "War booty", isCorrect: false },
                { answerText: "All of the above", isCorrect: true },
              ],
            },
            question2: {
              text: "Imperial commander Peter Melander von Holzappel was killed trying to do what?",
              answerOptions: [
                { answerText: "Rescue his men", isCorrect: true },
                {
                  answerText: "Retreat from the battle field",
                  isCorrect: false,
                },
                {
                  answerText: "Switch sides to the french-swedish",
                  isCorrect: false,
                },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
        {
          // START OF BATTLE OBJECT
          name: "Lens",
          prelude:
            "Over the four years following the decisive French victory at Rocroi against the Spanish Army of Flanders, the French captured dozens of towns throughout northern France and the Spanish Netherlands. Archduke Leopold Wilhelm was appointed governor of the Spanish Netherlands in 1647 to strengthen Spain's Habsburg alliance with Austria, and began a major counteroffensive the same year. The Spanish army first found success recapturing the fortresses of Armentières, Comines and Landrecies.\n The Prince de Condé was recalled from a failed campaign in Catalonia against the Spanish and appointed commander of the 16,000-man French army opposite the Spanish army of the Archduke and General Jean de Beck, the governor of Luxembourg. Condé captured Ypres but then the 18,000-strong Spanish-German force laid siege to Lens. Condé advanced to meet them.",
          description:
            "In the battle that ensued, Condé provoked the Spanish into giving up a strong hilltop position for an open plain, where he used the discipline and superior close-combat capabilities of his cavalry to charge and rout the Walloon-Lorrainer cavalry on the Spanish wings. The French infantry and cavalry in the center were attacked by the strong Spanish center, suffering heavy losses but holding their ground. The French cavalry on the wings, freed from any opposition, encircled and charged the Spanish center, who promptly surrendered. The French victory contributed to the signing of the Peace of Westphalia but the outbreak of the Fronde rebellion prevented the French from exploiting their victory to the hilt against the Spanish.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Pierre_Franque_-_Bataille_de_Lens_-_1648.jpg/1024px-Pierre_Franque_-_Bataille_de_Lens_-_1648.jpg",
          videoUrl:
            "https://www.youtube.com/embed/gmAg7t6oqEc",
          result: "French Victory",
          year: 1648,
          date: "20 August 1648",
          latitude: 50.416667,
          longitude: 2.833333,
          armyOne: JSON.stringify({
            beligerents: [["Kingdom of Spain", spanish]],
            commanders: [
              ["Archduke Leopold Wilhelm", spanish],
              ["Jean de Beck", spanish],
            ],
            strength: { number: 18000, guns: 38 },
            casualties: "8000 killed or captured",
          }),
          armyTwo: JSON.stringify({
            beligerents: [["Kingdom of France", france]],
            commanders: [["Louis prince de Condé", france]],
            strength: { number: 16000, guns: 18 },
            casualties: "1,500 killed or wounded",
          }),
          questions: JSON.stringify({
            question1: {
              text: "Why did the Spanish give up their strong hill-top position?",
              answerOptions: [
                {
                  answerText: "They were being approached from the rear",
                  isCorrect: false,
                },
                { answerText: "They were provoked by Condé", isCorrect: true },
                { answerText: "Overconfidence", isCorrect: false },
              ],
            },
            question2: {
              text: "Why did the Spanish center eventually surrender?",
              answerOptions: [
                {
                  answerText:
                    "They were encircled and charged by French cavalry",
                  isCorrect: true,
                },
                {
                  answerText: "Their top commander was killed in battle",
                  isCorrect: false,
                },
                { answerText: "Their own cavalry escaped", isCorrect: false },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
        {
          // START OF BATTLE OBJECT
          name: "Prague",
          prelude:
            "While the negotiations for the Peace of Westphalia were proceeding, the Swedes took the opportunity to mount one last campaign into Bohemia. The main result, and probably the main aim, was to loot the fabulous art collection assembled in Prague Castle by Rudolf II, Holy Roman Emperor (1552-1612), the pick of which was to be taken down the Elbe in barges and shipped to Sweden.",
          description:
            "The Swedes entered the city, defended by the Governor Feldmarschall Rudolf von Colloredo, a veteran of the siege of Mantua and of the battle of Lutzen, where he served under Albrecht von Wallenstein. A sudden night raid saw the swedes conquer the western bank of the Vltava river - i.e. Prague Castle and quarters Hradčany and Lesser Town - and completely looted those rich districts. Their attempt to enter the old town was repulsed on the Charles Bridge by Colloredo's men. A three-pronged third Swedish army attack against the city was fiercely resisted, with help from the burghers' militia and student voluntary troops under Czech Jesuit priest Jiří Plachý and German jurist Hans Georg Kauffer. The Swedes settled for looting the castle and surrounding palaces and monasteries.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Battle_on_Charles_Bridge_-_1648.jpg/1280px-Battle_on_Charles_Bridge_-_1648.jpg",
          videoUrl:
            "https://www.youtube.com/embed/gmAg7t6oqEc",
          result: "Disputed",
          year: 1648,
          date: "25 July - 1 November 1648",
          latitude: 50.086389,
          longitude: 14.412222,
          armyOne: JSON.stringify({
            beligerents: [["Swedish Empire"]],
            commanders: [
              ["Hans Christoff von Königsmarck", swedish],
              ["Prince Carl Gustaf", swedish],
              ["Arvid Wittenberg", swedish],
            ],
            strength: { number: 13500, guns: 0 },
            casualties: "500 killed, 700 wounded",
          }),
          armyTwo: JSON.stringify({
            beligerents: [["Bohemia", bohemia]],
            commanders: [
              ["Count Rudolph Colloredo-Wallsee", bohemia],
              ["Jiří Plachý", bohemia],
              ["Hans Georg Kauffer", bohemia],
            ],
            strength: { number: 2000, guns: 0 },
            casualties: "219 killed, 475 wounded",
          }),
          questions: JSON.stringify({
            question1: {
              text: "What was a key motivator for this last Swedish campaign into Bohemia",
              answerOptions: [
                { answerText: "Honour", isCorrect: false },
                { answerText: "Land", isCorrect: false },
                { answerText: "Loot", isCorrect: true },
              ],
            },
            question2: {
              text: "Governor Feldmarschall Rudolf von Colloredo was a veteran of which major battle",
              answerOptions: [
                { answerText: "Freiburg", isCorrect: false },
                { answerText: "Austerlitz", isCorrect: false },
                { answerText: "Lutzen", isCorrect: true },
              ],
            },
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
          //END OF BATTLE OBJECT
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("battles", null, {});
  },
};
