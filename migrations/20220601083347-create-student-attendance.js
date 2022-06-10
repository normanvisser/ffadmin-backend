"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("studentAttendances", {
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
      groupId: {
        type: Sequelize.INTEGER,
        references: { model: "groups", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      date: {
        type: Sequelize.DATEONLY,
      },
      timeStart: {
        type: Sequelize.TIME,
      },
      timeEnd: {
        type: Sequelize.TIME,
      },
      totalHours: {
        type: Sequelize.FLOAT,
      },
      attended: {
        type: Sequelize.BOOLEAN,
      },
      authorizedAbsence: {
        type: Sequelize.BOOLEAN,
      },
      absenceReason: {
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
    await queryInterface.dropTable("studentAttendances");
  },
};
