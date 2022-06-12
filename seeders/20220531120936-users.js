"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Norman",
          lastName: "Visser",
          email: "normanvisser88@gmail.com",
          password: "norman",
          role: "Administrator",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "test",
          lastName: "test",
          email: "test@test.com",
          password: "test",
          role: "Teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Christiano",
          lastName: "Ronaldo",
          email: "ronaldo@gmail.com",
          password: "ronaldo",
          role: "Teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
