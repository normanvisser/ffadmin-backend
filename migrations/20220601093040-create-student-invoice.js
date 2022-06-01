"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("studentInvoice", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      studentId: {
        type: Sequelize.INTEGER,
        references: { model: "students", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      paid: {
        type: Sequelize.BOOLEAN,
      },
      paidOn: {
        type: Sequelize.DATEONLY,
      },
      paidBy: {
        type: Sequelize.STRING,
      },
      hours: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("studentInvoice");
  },
};
