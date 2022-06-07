const User = require("../models").user;
const { toData } = require("../auth/jwt");

const auth = async (req, res, next) => {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  console.log(auth);
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]); // Gets userId out of token
      const user = await User.findByPk(data.userId); // Find user
      if (!user) {
        res.status(404).send("No user found");
      } else {
        req.user = user; // Sending the user info can be useful
        next();
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    res.status(401).send("please supply valid credentials");
  }
};
