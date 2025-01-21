const mongoose = require("mongoose");
const Player = require("./models/Player");
const Racket = require("./models/racket");
const Shuttle = require("./models/Shuttle");
require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => seedDatabase())
  .catch(err => console.log(err));

async function seedDatabase() {
  try {
    await Player.insertMany([
      { name: "Alice", country: "USA", age: 25 },
      { name: "Bob", country: "UK", age: 30 },
    ]);

    await Racket.insertMany([
      { brand: "Yonex", series: "Astrox", model: "77" },
      { brand: "Li-Ning", series: "Turbo", model: "X9" },
    ]);

    await Shuttle.insertMany([
      { brand: "Yonex", model: "AS-10", speed: "Fast" },
      { brand: "Victor", model: "Master Ace", speed: "Medium" },
    ]);

    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.connection.close();
  }
}
