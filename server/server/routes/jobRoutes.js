const express = require('express');
const router = express.Router();
const jobController = require("../controllers/jobController/jobController");


router.get('/search', jobController.searchJobs);
router.get('/', jobController.getAllJobs);
router.post('/', jobController.createJob);
router.get('/:id', jobController.getJobById);
router.put('/:id', jobController.updateJobById);


module.exports = router;

