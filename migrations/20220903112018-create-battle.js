'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('battles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prelude: {
        type: Sequelize.TEXT
      },
      name:{
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      year:{
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      army_one: {
        type: Sequelize.JSONB
      },
      army_two: {
        type: Sequelize.JSONB
      },
      result:{
        type: Sequelize.STRING
      },
      questions: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('battles');
  }
};