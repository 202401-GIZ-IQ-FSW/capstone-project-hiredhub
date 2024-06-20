const express = require("express");
const cors = require("cors");
require("dotenv").config();


//Route Imports
const companyRoutes = require("./routes/companyRoutes");
const authRoutes = require("./routes/authRoutes");
const emailRoutes = require("./routes/emailRoutes")



//DB Connect
const connectToMongo = require("./db/connection");
const logging = require("./middlewares/logging");



const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// logging middleware
app.use(logging());


//ROUTES
app.use('/api/auth', authRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/send-email", emailRoutes)




//SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});




app.get("/test", (req, res) => {
  res.json(
    "Server connection to client works!!  Good Luck with your capstones :D"
  );
});

module.exports = app;
