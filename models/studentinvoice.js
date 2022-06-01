"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class studentInvoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      studentInvoice.belongsTo(models.student, { foreignKey: "studentId" });
    }
  }
  studentInvoice.init(
    {
      studentId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      paid: DataTypes.BOOLEAN,
      paidOn: DataTypes.DATEONLY,
      paidBy: DataTypes.STRING,
      hours: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "studentInvoice",
    }
  );
  return studentInvoice;
};
