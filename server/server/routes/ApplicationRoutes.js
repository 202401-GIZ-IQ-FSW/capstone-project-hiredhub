const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController/applicationController");
const JwtAuthorize = require('../middlewares/authMiddleware')

router.post("/", JwtAuthorize, applicationController.createApplication);
router.get("/user/:userId", JwtAuthorize, applicationController.getApplicationsByUserId);
router.get("/job/:jobId", JwtAuthorize, applicationController.getApplicationsByJobId);
router.put("/:id", JwtAuthorize, applicationController.updateApplication);
router.delete("/:id", JwtAuthorize, applicationController.deleteApplication);

module.exports = router;
