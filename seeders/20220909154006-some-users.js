'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        displayName: "bob",
        email: "bob@gmail.com",
        uid: "sddsfdssdfasdfdsgfds",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        displayName: "tim",
        email: "tim@gmail.com",
        uid: "hjkhjkghjghjgh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
    await queryInterface.bulkDelete("users", null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
