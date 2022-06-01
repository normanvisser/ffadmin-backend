"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class group_teachingMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      group_teachingMethod.belongsTo(models.group, { foreignKey: "groupId" });
      group_teachingMethod.belongsTo(models.teachingMethod, {
        foreignKey: "teachingMethodId",
      });
    }
  }
  group_teachingMethod.init(
    {
      groupId: DataTypes.INTEGER,
      teachingMethodId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "group_teachingMethod",
    }
  );
  return group_teachingMethod;
};
