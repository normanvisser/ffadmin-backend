"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "student_groups",
      [
        {
          studentId: 1,
          groupId: 3,
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
          groupId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 4,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 5,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 6,
          groupId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 7,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 8,
          groupId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 9,
          groupId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 10,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 11,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 12,
          groupId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 13,
          groupId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 14,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 15,
          groupId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 16,
          groupId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 17,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 18,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 19,
          groupId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 20,
          groupId: 3,
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
