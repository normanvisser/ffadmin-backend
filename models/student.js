"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.belongsToMany(models.group, {
        through: "student_groups",
        foreignKey: "studentId",
      });
      student.hasMany(models.studentAttendance, { foreignKey: "studentId" });
      student.hasMany(models.studentInvoice, { foreignKey: "studentId" });
    }
  }
  student.init(
    {
      ref: DataTypes.STRING,
      firstName: DataTypes.STRING,
      initials: DataTypes.STRING,
      lastName: DataTypes.STRING,
      gender: DataTypes.STRING,
      bsn: DataTypes.STRING,
      dateOfBirth: DataTypes.DATEONLY,
      contractSigned: DataTypes.BOOLEAN,
      startingDate: DataTypes.DATEONLY,
      webCode: DataTypes.STRING,
      extension: DataTypes.BOOLEAN,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "student",
    }
  );
  return student;
};
