const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const studentsRouter = require("./routers/students");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("werkt");
});
app.use("/students", studentsRouter);

app.listen(PORT, () => {
  console.log(`Listening on :${PORT}`);
});
