"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "lessonSchedules",
      [
        {
          classId: 1,
          day: 1,
          timeStart: 1330,
          timeEnd: 1530,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 1,
          day: 3,
          timeStart: 930,
          timeEnd: 1100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 1,
          day: 5,
          timeStart: 930,
          timeEnd: 1100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 3,
          day: 2,
          timeStart: 1330,
          timeEnd: 1530,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 3,
          day: 4,
          timeStart: 900,
          timeEnd: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 3,
          day: 5,
          timeStart: 1600,
          timeEnd: 1800,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lessonSchedules", null, {});
  },
};
