const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, TEST_DB_HOST } =
  process.env;

const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${
  process.env.NODE_ENV === "test" ? TEST_DB_HOST : DB_HOST
}/${DB_NAME}?retryWrites=true&w=majority&appName=${DB_NAME}`;

mongoose.set("strictQuery", false);

const url = DB_URI;
console.log("url################################", url);
const connectToMongo = () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });

  db = mongoose.connection;

  db.once("open", () => {
    console.log("Database connected: ", url);
  });

  db.on("error", (err) => {
    console.error("Database connection error: ", err);
  });
};

module.exports = connectToMongo;
