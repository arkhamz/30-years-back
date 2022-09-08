"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("battles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      prelude: {
        type: Sequelize.TEXT,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      imageUrl: {
        type: Sequelize.TEXT,
      },
      videoUrl: {
        type: Sequelize.TEXT,
      },
      date: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      latitude: {
        type: Sequelize.FLOAT,
      },
      longitude: {
        type: Sequelize.FLOAT,
      },
      armyOne: {
        type: Sequelize.JSONB,
      },
      armyTwo: {
        type: Sequelize.JSONB,
      },
      result: {
        type: Sequelize.STRING,
      },
      questions: {
        type: Sequelize.JSONB,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("battles");
  },
};
