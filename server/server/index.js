const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectToMongo = require("./db/connection");
const logging = require("./middlewares/logging");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logging());

app.get("/test", async (req, res) => {
  res.json(
    "Server connection to client works!! Good Luck with your capstones :D"
  );
});

const startServer = async () => {
  try {
    await connectToMongo();
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to the database", err);
    process.exit(1);
  }
};

startServer();

module.exports = app;
