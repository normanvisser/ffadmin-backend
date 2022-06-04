"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "student_groups",
      [
        {
          studentId: 1,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 2,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 3,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 4,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("student_groups", null, {});
  },
};
