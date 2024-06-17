const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const url = process.env.DB_URI;

const connectToMongo = () => {
  mongoose.connect(url, { useNewUrlParser: true });

  db = mongoose.connection;

  db.once("open", () => {
    console.log("Database connected");
  });

  db.on("error", (err) => {
    console.error("Database connection error: ", err);
  });
};

module.exports = connectToMongo;
