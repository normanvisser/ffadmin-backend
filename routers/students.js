const { Router } = require("express");
const router = Router();
const Student = require("../models").student;
const Group = require("../models").group;
const StudentAttendance = require("../models").studentAttendance;
const User = require("../models").user;

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
      ],
      include: [{ model: Group, attributes: ["level", "name"] }],
    });
    res.send(allStudents); // 200
  } catch (e) {
    console.log(e.message);
    next(e); // 500s
  }
});

router.get("/specificStudent/:id", async (req, res, next) => {
  try {
    const studentId = req.params.id;
    const specificStudent = await Student.findByPk(studentId, {
      include: [
        { model: Group, attributes: ["level", "name"] },
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
      bsn,
      ref,
      startingDate,
      contractSigned,
      webCode,
      extension,
      status,
    } = req.body;
    const newStudent = await Student.create({
      firstName,
      initials,
      lastName,
      gender,
      dateOfBirth,
      bsn,
      ref,
      startingDate,
      contractSigned,
      webCode,
      extension,
      status,
    });
    res.status(201).send("Successfully added new student", newStudent);
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
