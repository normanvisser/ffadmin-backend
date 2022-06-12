const { Router } = require("express");
const user_group = require("../models").user_group;
const router = new Router();
const Attendance = require("../models").studentAttendance;
const Student = require("../models").student;
const Group = require("../models").group;
const User = require("../models").user;

router.get("/all", async (req, res, next) => {
  try {
    const allAttendances = await Attendance.findAll({
      include: [
        {
          model: Student,
          attributes: ["firstName", "initials", "lastName"],
          include: [
            {
              model: Group,
              include: {
                model: user_group,
                as: "user_groups_roles",
                include: [
                  {
                    model: User,
                  },
                ],
              },
            },
          ],
        },
      ],
    });
    res.send(allAttendances);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
