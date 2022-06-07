const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
const bcrypt = require("bcrypt");

router.post("/users/new-user", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      return res.status(400).send("Email, password and full name are required");
    } else {
      const newUser = await User.create({
        email,
        password: bcrypt.hashSync(password, 10), // the '10' influences the hash
        fullName,
      });
      res.send(newUser);
    }
  } catch (error) {
    console.log(error.message);
    // next (error)
  }
});

module.exports = router;
