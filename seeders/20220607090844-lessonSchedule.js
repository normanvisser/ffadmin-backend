"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "lessonSchedules",
      [
        {
          classId: 1,
          day: "Monday",
          timeStart: "13:30",
          timeEnd: "15:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 1,
          day: "Wednesday",
          timeStart: "09:30",
          timeEnd: "11:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 1,
          day: "Friday",
          timeStart: "09:30",
          timeEnd: "11:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 2,
          day: "Monday",
          timeStart: "09:00",
          timeEnd: "11:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 2,
          day: "Tuesday",
          timeStart: "15:30",
          timeEnd: "17:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 2,
          day: "Friday",
          timeStart: "09:00",
          timeEnd: "11:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 3,
          day: "Tuesday",
          timeStart: "13:30",
          timeEnd: "15:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 3,
          day: "Thursday",
          timeStart: "09:00",
          timeEnd: "10:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 3,
          day: "Friday",
          timeStart: "16:00",
          timeEnd: "18:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 4,
          day: "Wednesday",
          timeStart: "11:00",
          timeEnd: "12:30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 4,
          day: "Thursday",
          timeStart: "15:30",
          timeEnd: "17:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 4,
          day: "Friday",
          timeStart: "13:00",
          timeEnd: "15:00",
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
