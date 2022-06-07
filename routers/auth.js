const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const router = new Router();
const User = require("../models").user;

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and password required");
    } else {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        res.status(400).send({
          message: "user with that email does not exist",
        });
        // } else if (bcrypt.compareSync(password, user.password)) {
      } else if (password === user.password) {
        res.send({ jwt: toJWT({ userId: user.id }) });
      } else {
        res.status(400).send({
          message: "wrong password",
        });
      }
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});
module.exports = router;
