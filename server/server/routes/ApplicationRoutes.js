const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController/applicationController");
const JwtAuthorize = require('../middlewares/authMiddleware')

//route accessed by the job seeker to apply for a job
router.post("/", JwtAuthorize, applicationController.applyForJob);
router.delete("/:id", JwtAuthorize, applicationController.deleteApplication);

//routes accessed by the employer
router.get("/user/:userId", JwtAuthorize, applicationController.getApplicationsByUserId);
router.get("/job/:jobId", JwtAuthorize, applicationController.getApplicationsByJobId);
router.put("/:applicationId", JwtAuthorize, applicationController.updateApplicationStatus);
router.delete("/:applicationId", JwtAuthorize, applicationController.deleteApplicationByCompany);

module.exports = router;
