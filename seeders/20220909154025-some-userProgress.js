'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("userProgresses",[
      {
        id:1,
        userId: 1,
        battleId: 1,
        unlocked: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        userId: 2,
        battleId: 12,
        unlocked: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("userProgresses",null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
