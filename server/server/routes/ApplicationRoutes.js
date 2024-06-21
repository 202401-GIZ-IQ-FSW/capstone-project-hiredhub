const express = require("express");
const router = express.Router();
const apllicationController = require("../controllers/applicationController/applicationController");

router.post("/", apllicationController.createApplication);
router.get("/user/:userId", apllicationController.getApplicationsByUserId);
router.get("/job/:jobId", apllicationController.getApplicationsByJobId);
router.put("/:id", apllicationController.updateApplication);
router.delete("/:id", apllicationController.deleteApplication);

module.exports = router;
