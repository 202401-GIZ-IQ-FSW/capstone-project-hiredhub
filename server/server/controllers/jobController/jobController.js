const Job = require("../../models/Job");


exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.createJob = async (req, res) => {
  const job = new Job(req.body);
  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateJobById = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }


  
}


exports.searchJobs = async (req, res) => {
    const { keyword, location, title, category, jobType, wage, status, educationalLevel, yearsOfExperience } = req.query;
    const filter = {};
  
    if (keyword) {
      filter.$or = [
        { title: new RegExp(keyword, 'i') },
        { description: new RegExp(keyword, 'i') }
      ];
    }
  
    if (location) {
      filter.location = new RegExp(location, 'i');
    }
  
    if (title) {
      filter.title = new RegExp(title, 'i');
    }
  
    if (category) {
      filter.category = category;
    }
  
    if (jobType) {
      filter.jobType = { $in: jobType.split(',') };
    }
  
    if (wage) {
      filter.wage = { $gte: Number(wage) };
    }
  
    if (status) {
      filter.status = status;
    }
  
    if (educationalLevel) {
      filter['requirements.educationalLevel'] = educationalLevel;
    }
  
    if (yearsOfExperience) {
      filter['requirements.yearsOfExperience'] = yearsOfExperience;
    }
  
    try {
      const jobs = await Job.find(filter);
      res.status(200).json(jobs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
