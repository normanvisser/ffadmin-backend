"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      group.belongsToMany(models.user, {
        through: "user_groups",
        foreignKey: "groupId",
      });
      group.belongsToMany(models.student, {
        through: "student_groups",
        foreignKey: "groupId",
      });
      group.belongsToMany(models.teachingMethod, {
        through: "group_teachingMethods",
        foreignKey: "groupId",
      });
    }
  }
  group.init(
    {
      name: DataTypes.STRING,
      level: DataTypes.STRING,
      hours: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "group",
    }
  );
  return group;
};
