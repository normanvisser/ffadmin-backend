const { Router } = require("express");
const user_group = require("../models").user_group;
const router = new Router();
const Group = require("../models").group;
const User = require("../models").user;
const Student = require("../models").student;
const TeachingMethod = require("../models").teachingMethod;
const LessonSchedule = require("../models").lessonSchedule;

router.get("/allNames", async (req, res, next) => {
  try {
    const allNames = await Group.findAll({ attributes: ["id", "name"] });
    res.send(allNames);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.get("/all", async (req, res, next) => {
  try {
    const allGroups = await Group.findAll({
      include: [
        { model: TeachingMethod, attributes: ["name"] },
        {
          model: user_group,
          as: "user_groups_roles",
          include: [{ model: User }],
        },
      ],
    });
    res.send(allGroups);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/groupDetails/:id", async (req, res, next) => {
  try {
    const groupId = req.params.id;
    const groupDetails = await Group.findByPk(groupId, {
      include: [
        { model: User, attributes: ["firstName", "lastName"] },
        { model: Student, attributes: ["firstName", "lastName"] },
        { model: TeachingMethod, attributes: ["name"] },
        { model: LessonSchedule },
      ],
    });
    res.send(groupDetails);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
