"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ref: {
        type: Sequelize.STRING,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      initials: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      bsn: {
        type: Sequelize.STRING,
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY,
      },
      contractSigned: {
        type: Sequelize.BOOLEAN,
      },
      startingDate: {
        type: Sequelize.DATEONLY,
      },
      webCode: {
        type: Sequelize.STRING,
      },
      extension: {
        type: Sequelize.BOOLEAN,
      },
      status: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("students");
  },
};
