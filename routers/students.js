const { Router } = require("express");
const router = Router();
const Student = require("../models").student;
const Group = require("../models").group;
const StudentAttendance = require("../models").studentAttendance;
const User = require("../models").user;
const Student_group = require("../models").student_group;

const sequelize = require("sequelize");

router.get("/all", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "gender",
        "dateOfBirth",
        "ref",
        "bsn",
        "status",
        "imageUrl",
      ],
      include: [{ model: Group, attributes: ["level", "name"] }],
    });
    res.send(allStudents); // 200
  } catch (e) {
    console.log(e.message);
    next(e); // 500s
  }
});

router.post("/edit", async (req, res, next) => {
  try {
    const {
      firstName,
      initials,
      lastName,
      gender,
      dateOfBirth,
      startingDate,
      bsn,
      groupId,
      contractSigned,
      extension,
      webCode,
      ref,
      status,
      id,
    } = req.body;

    const userToUpdate = await Student.findByPk(id);

    const editedStudent = await userToUpdate.update({
      firstName,
      initials,
      lastName,
      gender,
      dateOfBirth,
      startingDate,
      bsn,
      groupId,
      contractSigned,
      extension,
      webCode,
      ref,
      status,
    });

    const Student_groupToUpdate = await Student_group.findByPk(id);
    const updateStudent_group = await Student_groupToUpdate.update({
      studentId: id,
      groupId: groupId,
    });

    const findStudent = await Student.findByPk(id, {
      include: [
        { model: Group, attributes: ["id", "level", "name"] },
        { model: StudentAttendance },
      ],
    });

    res.send(findStudent);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const studentToDelete = await Student.findByPk(id);

    studentToDelete.destroy();

    res.send({ message: "Deletion succesfull", studentToDelete });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// router.get("/specificStudent/:id", async (req, res, next) => {
//   try {
//     const studentId = req.params.id;
//     const specificStudent = await Student.findByPk(studentId, {
//       include: [
//         { model: Group, attributes: ["level", "name"] },
//         { model: StudentAttendance },
//       ],
//     });

//     const totalHours = await StudentAttendance.findAll({
//       where: { studentId: studentId },
//       attributes: [
//         "studentId",
//         [sequelize.fn("sum", sequelize.col("totalHours"), "totalHours")],
//       ],
//     });

//     if (!specificStudent)
//       return res.status(404).send("No student with this id found");

//     res.send(totalHours);
//   } catch (error) {
//     console.log(error.message);
//     next(error);
//   }
// });

router.get("/specificStudent/:id", async (req, res, next) => {
  try {
    const studentId = req.params.id;
    const specificStudent = await Student.findByPk(studentId, {
      include: [
        { model: Group, attributes: ["id", "level", "name"] },
        { model: StudentAttendance },
      ],
    });

    if (!specificStudent)
      return res.status(404).send("No student with this id found");

    res.send(specificStudent);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.post("/newStudent", async (req, res, next) => {
  try {
    const {
      firstName,
      initials,
      lastName,
      gender,
      dateOfBirth,
      startingDate,
      bsn,
      groupId,
      contractSigned,
      extension,
      webCode,
      ref,
      status,
      imageUrl,
    } = req.body;

    const newStudent = await Student.create({
      firstName,
      initials,
      lastName,
      gender,
      dateOfBirth,
      startingDate,
      bsn,
      contractSigned,
      extension,
      webCode,
      ref,
      status,
      imageUrl,
    });

    const newStudentData = await Student.findOne({
      limit: 1,
      order: [["createdAt", "DESC"]],
      attributes: ["id"],
    });

    const newStudentId = newStudentData.dataValues.id;

    const newStudent_group = await Student_group.create({
      groupId,
      studentId: newStudentId,
    });

    const sendStudent = await Student.findOne({
      limit: 1,
      order: [["createdAt", "DESC"]],
      include: { model: Group },
    });

    res.status(201).send(sendStudent);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// Testing relations
// router.get("/:id", async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const specificStudent = await Student.findByPk(id, {
//       include: [{ model: Group }, { model: StudentAttendance }],
//     });
//     res.send(specificStudent);
//   } catch (e) {}
// });

// Testing relations
// router.get("/teachers/:id/groups", async (req, res, next) => {
//   try {
//     const teacherId = req.params.id;
//     const teacher = await User.findByPk(teacherId, {
//       include: [{ model: Group, include: [Student] }],
//     });
//     res.send(teacher);
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
