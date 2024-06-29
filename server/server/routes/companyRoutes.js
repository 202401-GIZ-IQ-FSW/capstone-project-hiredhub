const express = require("express");
const router = express.Router();
const JwtAuthorize = require("../middlewares/authMiddleware")
const companyController = require("../controllers/companyController/companyController");
const upload = require("../config/multerConfig");
const JwtAuthorize = require("../middlewares/authMiddleware");


router.get("/", JwtAuthorize, companyController.getAllCompanies);
router.post("/", upload.single("logo"), companyController.createCompany);
router.get("/:id", JwtAuthorize, companyController.getCompanyById);
router.put(
  "/:id",
  JwtAuthorize,
  upload.single("logo"),
  companyController.updateCompany
);
router.delete("/:id", JwtAuthorize, companyController.deleteCompany);

module.exports = router;
