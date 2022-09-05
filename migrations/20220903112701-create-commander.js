'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('commanders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      loyalty: {
        type: Sequelize.STRING
      },
      loyaltyImageUrl: {
        type: Sequelize.TEXT
      },
      imageUrl: {
        type: Sequelize.TEXT
      },
      birthDate: {
        type: Sequelize.STRING
      },
      died: {
        type: Sequelize.STRING
      },
      birthPlace: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('commanders');
  }
};