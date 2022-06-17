"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "group_teachingMethods",
      [
        {
          groupId: 1,
          teachingMethodId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 2,
          teachingMethodId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 3,
          teachingMethodId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupId: 4,
          teachingMethodId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("group_teachingMethods", null, {});
  },
};
