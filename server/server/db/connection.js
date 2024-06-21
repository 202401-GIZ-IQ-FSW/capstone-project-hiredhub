const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, TEST_DB_HOST } =
  process.env;

const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${
  process.env.NODE_ENV === "test" ? TEST_DB_HOST : DB_HOST
}:${DB_PORT}/${DB_NAME}?authSource=admin`;

// lIVE DB URI FOR MOHAMMED NAZAR FELL FREE TO USE IT
// COMMENT THE ABOVE DB_URI AND UNCOMMENT THE BELOW LINE
// const DB_URI = `mongodb+srv://x3raqe:1234@test1.qll8xfz.mongodb.net/?retryWrites=true&w=majority&appName=Test1`;


const url = DB_URI;

const connectToMongo = () => {
  mongoose.connect(url, { useNewUrlParser: true });

  db = mongoose.connection;

  db.once("open", () => {
    console.log("Database connected: ", url);
  });

  db.on("error", (err) => {
    console.error("Database connection error: ", err);
  });
};

module.exports = connectToMongo;
