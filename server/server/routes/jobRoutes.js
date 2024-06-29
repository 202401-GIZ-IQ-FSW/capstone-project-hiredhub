const express = require('express');
const router = express.Router();
const JwtAuthorize = require("../middlewares/authMiddleware")
const jobController = require("../controllers/jobController/jobController");


router.get('/search', jobController.searchJobs);
router.get('/', jobController.getAllJobs);
router.post('/',JwtAuthorize, jobController.createJob);
router.get('/:id', jobController.getJobById);
router.put('/:id',JwtAuthorize, jobController.updateJobById);


module.exports = router;

