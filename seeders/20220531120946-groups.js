"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "groups",
      [
        {
          name: "Ned-1",
          level: "A1",
          hours: "30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ned-2",
          level: "A2",
          hours: "25",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("groups", null, {});
  },
};
