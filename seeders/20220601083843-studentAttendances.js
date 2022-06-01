"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "studentAttendances",
      [
        {
          studentId: 1,
          groupId: 1,
          date: "2022-05-30",
          timeStart: "09:00:00",
          timeEnd: "9:30:00",
          attended: true,
          authorizedAbsence: null,
          absenceReason: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("studentAttendances", null, {});
  },
};
