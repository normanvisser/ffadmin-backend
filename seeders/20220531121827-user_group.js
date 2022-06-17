"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_groups",
      [
        {
          userId: 1,
          groupId: 1,
          role: "teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          groupId: 1,
          role: "co-teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          groupId: 2,
          role: "teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          groupId: 2,
          role: "co-teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          groupId: 3,
          role: "teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          groupId: 3,
          role: "co-teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          groupId: 4,
          role: "co-teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          groupId: 4,
          role: "teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_groups", null, {});
  },
};
