// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController/uploadController");

router.get("/server/files/:filename", uploadController.getFile);

module.exports = router;
