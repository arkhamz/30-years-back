'use strict';

const { pathToFileURL } = require("url");

const bavaria = pathToFileURL("../assets/bavaria.png").pathname
const bohemia = pathToFileURL("../assets/bohemia.png").pathname
const catholic = pathToFileURL("../assets/catholic-league.png").pathname
const denmarkNorway = pathToFileURL("../assets/denmark-norway.png").pathname
const dutch = pathToFileURL("../assets/dutch.png").pathname
const hesseKassel = pathToFileURL("../assets/hesse-kassel.png").pathname
const hre = pathToFileURL("../assets/hre.png").pathname
const palatinate = pathToFileURL("../assets/palatinate.png").pathname
const prussia = pathToFileURL("../assets/prussia.png").pathname;
const savoyard = pathToFileURL("../assets/savoyard.png").pathname
const saxony = pathToFileURL("../assets/saxony.png").pathname
const spanish = pathToFileURL("../assets/spanish.png").pathname
const swedish = pathToFileURL("../assets/swedish.png").pathname
const transylvania = pathToFileURL("../assets/transylvania.png").pathname
const stralsund = pathToFileURL("../assets/stralsund.png").pathname
const scots = pathToFileURL("../assets/scots.png").pathname
const france = pathToFileURL("../assets/france.png").pathname
const jankauPic = pathToFileURL("../assets/jankau.jpeg").pathname

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("commanders", [

      {
        fullName: "Christian IV of Denmark",
        title: "King of Denmark and Norway, Duke of Holstein and Schleswig",
        loyalty: 0,
        loyaltyImageUrl: denmarkNorway,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Christian_IV_Pieter_Isaacsz_1612.jpg/800px-Christian_IV_Pieter_Isaacsz_1612.jpg",
        birthDate: "12 April 1577",
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },{
        fullName: "Gustavus Adolphus",
        title: 0,
        loyalty: 0,
        loyaltyImageUrl: 0,
        imageUrl: 0,
        birthDate: 0,
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullName: "Lennart Torstenson",
        title: 0,
        loyalty: 0,
        loyaltyImageUrl: 0,
        imageUrl: 0,
        birthDate: 0,
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullName: "Conde",
        title: 0,
        loyalty: 0,
        loyaltyImageUrl: 0,
        imageUrl: 0,
        birthDate: 0,
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullName: "Turenne",
        title: 0,
        loyalty: 0,
        loyaltyImageUrl: 0,
        imageUrl: 0,
        birthDate: 0,
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullName: "Ernst von Mansfeld",
        title: 0,
        loyalty: 0,
        loyaltyImageUrl: 0,
        imageUrl: 0,
        birthDate: 0,
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullName: "Ferdinand II",
        title: 0,
        loyalty: 0,
        loyaltyImageUrl: 0,
        imageUrl: 0,
        birthDate: 0,
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullName: "Wallenstein",
        title: 0,
        loyalty: 0,
        loyaltyImageUrl: 0,
        imageUrl: 0,
        birthDate: 0,
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullName: "Tilly",
        title: 0,
        loyalty: 0,
        loyaltyImageUrl: 0,
        imageUrl: 0,
        birthDate: 0,
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullName: "Von Hatzfeldt",
        title: 0,
        loyalty: 0,
        loyaltyImageUrl: 0,
        imageUrl: 0,
        birthDate: 0,
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullName: "Von Mercy",
        title: 0,
        loyalty: 0,
        loyaltyImageUrl: 0,
        imageUrl: 0,
        birthDate: 0,
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: "Von Werth",
        title: 0,
        loyalty: 0,
        loyaltyImageUrl: 0,
        imageUrl: 0,
        birthDate: 0,
        died: 0,
        birthPlace: 0,
        bio: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }


    ], {})
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("commanders", null, []);
    
  }
};

