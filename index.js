require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const conn = require("./config/db");
conn();
const starterUsers = require("./config/seed");
const User = require("./models/user");
const userRoutes = require("./routes/userRoutes");

//middleware
app.use(express.json());
app.use("/api/user", userRoutes);


//home route
app.get("/", (req, res) => {
  res.send("Home Page!");
});

//seed route = populate our db with starter data
app.get("/config/seed", async (req, res) => {
  try {
    await User.deleteMany({});
    await User.create(starterUsers);
    res.json(starterUsers);
  } catch (error) {
    console.log(
      `Something went wrong with loading seed data: ${error.message}`
    );
  }
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});