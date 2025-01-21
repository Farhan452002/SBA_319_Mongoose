require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const conn = require("./config/db");
conn();
const starterPlayers = require("./config/seedPlayers");
const Player = require("./models/player");
const playerRoutes = require("./routes/playerRoutes");

//middleware
app.use(express.json());
app.use("/api/player", playerRoutes);


//home route
app.get("/", (req, res) => {
  res.send("Home Page!");
});

//seed route = populate our db with starter data
app.get("/config/seed", async (req, res) => {
  try {
    await Player.deleteMany({});
    await Player.create(starterPlayers);
    res.json(starterPlayers);
  } catch (error) {
    console.log(
      `Something went wrong with loading seed data: ${error.message}`
    );
  }
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});