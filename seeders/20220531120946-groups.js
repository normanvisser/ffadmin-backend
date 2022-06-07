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
          startDate: "2022-01-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ned-2",
          level: "A2",
          hours: "25",
          startDate: "2022-11-03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ned-3",
          level: "B1",
          hours: "45",
          startDate: "2021-04-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ned-4",
          level: "B2",
          hours: "80",
          startDate: "2019-06-11",
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
