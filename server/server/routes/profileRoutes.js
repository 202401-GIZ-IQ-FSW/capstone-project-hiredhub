const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController/profileController");
const JwtAuthorize = require("../middlewares/authMiddleware");
const upload = require("../config/multerConfig");

router.get("/details", JwtAuthorize, profileController.getProfile);

router.post(
  "/create-profile",
  JwtAuthorize,
  upload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  profileController.createProfile
);

router.patch(
  "/update-profile",
  JwtAuthorize,
  upload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  profileController.updateProfile
);

router.post("/add-saved-job/:id", JwtAuthorize, profileController.addSavedJobs);

router.delete(
  "/remove-saved-job/:id",
  JwtAuthorize,
  profileController.removeSavedJobs
);

router.get("/get-saved-jobs", JwtAuthorize, profileController.getSavedJobs);

router.get(
  "/get-application-history",
  JwtAuthorize,
  profileController.getApplicationHistory
);

module.exports = router;
