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
          role: "Senior Web-Developer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Freddie",
          lastName: "Mercury",
          email: "freddiemercury@gmail.com",
          password: "freddie",
          role: "Teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Roger",
          lastName: "Taylor",
          email: "rogertaylor@gmail.com",
          password: "roger",
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
