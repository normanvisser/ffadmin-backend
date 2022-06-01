"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("group_teachingMethods", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      groupId: {
        type: Sequelize.INTEGER,
        references: { model: "groups", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      teachingMethodId: {
        type: Sequelize.INTEGER,
        references: { model: "teachingMethods", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("group_teachingMethods");
  },
};
