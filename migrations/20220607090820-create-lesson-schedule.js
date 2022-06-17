"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("lessonSchedules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      classId: {
        type: Sequelize.INTEGER,
        references: { model: "groups", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      day: {
        type: Sequelize.STRING,
      },
      timeStart: {
        type: Sequelize.STRING,
      },
      timeEnd: {
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
    await queryInterface.dropTable("lessonSchedules");
  },
};
