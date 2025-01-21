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
    // Seed Players
    await Player.insertMany([
      { name: "Viktor Axelsen", country: "Denmark", age: 29 },
      { name: "Kento Momota", country: "Japan", age: 29 },
      { name: "Lee Zii Jia", country: "Malaysia", age: 25 },
      { name: "Anthony Sinisuka Ginting", country: "Indonesia", age: 28 },
      { name: "Jonatan Christie", country: "Indonesia", age: 26 },
    ]);

    // Seed Rackets
    await Racket.insertMany([
      { brand: "Yonex", series: "Astrox", model: "Astrox 99 Pro" },
      { brand: "Li-Ning", series: "Turbo", model: "Turbo X90" },
      { brand: "Victor", series: "Thruster", model: "Thruster F" },
      { brand: "Babolat", series: "X-Feel", model: "X-Feel Blast" },
      { brand: "Carlton", series: "Kinesis", model: "Kinesis X90" },
    ]);

    // Seed Shuttles
    await Shuttle.insertMany([
      { brand: "Yonex", model: "Aerosensa 50", speed: "Fast" },
      { brand: "Li-Ning", model: "A+600", speed: "Medium" },
      { brand: "Victor", model: "Master Ace", speed: "Fast" },
      { brand: "RSL", model: "Classic Tourney", speed: "Medium" },
      { brand: "Carlton", model: "GT1", speed: "Fast" },
    ]);

    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.connection.close();
  }
}
