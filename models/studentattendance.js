"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class studentAttendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      studentAttendance.belongsTo(models.student, { foreignKey: "studentId" });
    }
  }
  studentAttendance.init(
    {
      studentId: DataTypes.STRING,
      groupId: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      timeStart: DataTypes.TIME,
      timeEnd: DataTypes.TIME,
      attended: DataTypes.BOOLEAN,
      authorizedAbsence: DataTypes.BOOLEAN,
      absenceReason: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "studentAttendance",
    }
  );
  return studentAttendance;
};
