'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userProgresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"users",
          key:"id"
        }
      },
      battleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "battles",
          key:"id"
        }
      },
      unlocked: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue: false
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
    await queryInterface.dropTable('userProgresses');
  }
};