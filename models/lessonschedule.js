"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lessonSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      lessonSchedule.belongsTo(models.group, { foreignKey: "classId" });
    }
  }
  lessonSchedule.init(
    {
      classId: DataTypes.INTEGER,
      day: DataTypes.STRING,
      timeStart: DataTypes.STRING,
      timeEnd: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "lessonSchedule",
    }
  );
  return lessonSchedule;
};
