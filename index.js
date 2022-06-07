const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const studentsRouter = require("./routers/students");
const groupsRouter = require("./routers/groups");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("werkt");
});

app.use("/user", userRouter);
app.use("/students", studentsRouter);
app.use("/groups", groupsRouter);

app.listen(PORT, () => {
  console.log(`Listening on :${PORT}`);
});
