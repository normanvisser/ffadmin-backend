"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class teachingMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      teachingMethod.belongsToMany(models.group, {
        through: "group_teachingMethods",
        foreignKey: "teachingMethodId",
      });
    }
  }
  teachingMethod.init(
    {
      method: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "teachingMethod",
    }
  );
  return teachingMethod;
};
