const express = require("express");
const cors = require("cors");

const companyRoutes = require("./routes/companyRoutes");

require("dotenv").config();

const connectToMongo = require("./db/connection");
const logging = require("./middlewares/logging");

const authRoutes = require('./routes/authRoutes')

const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});
app.use(logging());

app.use("/api/companies", companyRoutes);

app.use('/api', jobRoutes);

app.get("/test", (req, res) => {
  res.json(
    "Server connection to client works!!  Good Luck with your capstones :D"
  );
});



module.exports = app;
