"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student_group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student_group.belongsTo(models.student, { foreignKey: "studentId" });
      student_group.belongsTo(models.group, { foreignKey: "groupId" });
    }
  }
  student_group.init(
    {
      studentId: DataTypes.INTEGER,
      groupId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "student_group",
    }
  );
  return student_group;
};
