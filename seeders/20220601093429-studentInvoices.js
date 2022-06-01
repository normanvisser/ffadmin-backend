"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "studentInvoice",
      [
        {
          studentId: 1,
          amount: 500,
          paid: true,
          paidOn: "02-01-2022",
          paidBy: "Gemeente",
          hours: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("studentInvoice", null, {});
  },
};
