const express = require("express");
const router = express.Router();
const JwtAuthorize = require("../middlewares/authMiddleware")
const companyController = require("../controllers/companyController/companyController");

router.get("/", companyController.getAllCompanies);
router.post("/",JwtAuthorize, companyController.createCompany);
router.get("/:id", companyController.getCompanyById);
router.put("/:id",JwtAuthorize, companyController.updateCompany);
router.delete("/:id", companyController.deleteCompany);

module.exports = router;
