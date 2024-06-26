const express = require("express");
const cors = require("cors");
require("dotenv").config();

//DB Connect
const connectToMongo = require("./db/connection");
const logging = require("./middlewares/logging");

//Route Imports
const companyRoutes = require("./routes/companyRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const authRoutes = require("./routes/authRoutes");
const emailRoutes = require("./routes/emailRoutes");
const profileRoutes = require('./routes/profileRoutes')
const jobRoutes = require("./routes/jobRoutes")


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
app.use('/api/profile', profileRoutes)
app.use("/api/", categoryRoutes);


//SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});


app.use("/api/jobs", jobRoutes)

app.get("/test", (req, res) => {
  res.json(
    "Server connection to client works!!  Good Luck with your capstones :D"
  );
});



module.exports = app;
