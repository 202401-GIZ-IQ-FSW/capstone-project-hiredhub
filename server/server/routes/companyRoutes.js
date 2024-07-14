const express = require("express");
const router = express.Router();
const JwtAuthorize = require("../middlewares/authMiddleware");
const companyController = require("../controllers/companyController/companyController");
const upload = require("../config/multerConfig");

router.get("/", companyController.getAllCompanies);
router.post(
  "/",
  JwtAuthorize,
  upload.single("logo"),
  companyController.createCompany
);
router.get("/:id", JwtAuthorize, companyController.getCompanyById);
router.patch(
  "/:id",
  JwtAuthorize,
  upload.single("logo"),
  companyController.updateCompany
);
router.delete("/:id", JwtAuthorize, companyController.deleteCompany);

module.exports = router;
