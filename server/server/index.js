const express = require("express");
const cors = require("cors");
const companyRoutes = require("./routes/companyRoutes");
const getFile = require("./routes/RetriveFile");
require("dotenv").config();

// DB Connect
const connectToMongo = require("./db/connection");
const logging = require("./middlewares/logging");

// Route Imports
const authRoutes = require("./routes/authRoutes");
const applicationRoutes = require("./routes/ApplicationRoutes");
const companyRoutes = require("./routes/companyRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const emailRoutes = require("./routes/emailRoutes");
const jobRoutes = require("./routes/jobRoutes")
const profileRoutes = require("./routes/profileRoutes");

const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logging middleware
app.use(logging());
// ROUTES
app.use("/api/auth", authRoutes);
app.use('/api/applications', applicationRoutes);
app.use("/api/jobs", jobRoutes)
app.use("/api/companies", companyRoutes);
app.use("/api/send-email", emailRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/", categoryRoutes);
app.use("/backend-app", getFile);
//SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});

app.get("/test", (req, res) => {
  res.json("Server connection to client works!! Good Luck with your capstones :D");
});



module.exports = app;
