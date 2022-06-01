"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "teachingMethods",
      [
        {
          method: "Taal Compleet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          method: "KNM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("teachingMethods", null, {});
  },
};
