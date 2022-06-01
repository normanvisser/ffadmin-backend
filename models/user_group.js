"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_group.belongsTo(models.user, { foreignKey: "userId" });
      user_group.belongsTo(models.group, { foreignKey: "groupId" });
    }
  }
  user_group.init(
    {
      userId: DataTypes.INTEGER,
      groupId: DataTypes.INTEGER,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_group",
    }
  );
  return user_group;
};
