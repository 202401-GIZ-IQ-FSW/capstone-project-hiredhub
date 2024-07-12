const Job = require("../../models/Job");
const Company = require("../../models/Company")


exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
    .populate("companyId", "name")
    .populate("category", "name");
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.createJob = async (req, res) => {
  
  const userId = req.user.id;
  const role = req.user.role
  
  if (role !== 'employer') {
    return res.status(403).json({ message: 'You are not authorized to create job a listing' });
  }
  const company = await Company.findOne({ userId });
  if (!company) {
    return res.status(404).json({ error: 'Company not found' });
  }

  const jobData = {
    ...req.body,
    companyId: company._id,
  };

  try {
    const newJob = await Job.create(jobData);
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



exports.getJobById = async (req, res) => {
 
  const id = req.params.id
 
  try {
    const job = await Job.findById(id)
    .populate("companyId", "name")
    .populate("category", "name");
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateJobById = async (req, res) => {
 
  const id = req.params.id
 
  try {
    const job = await Job.findByIdAndUpdate(id, req.body, { new: true });
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }


  
}


exports.searchJobs = async (req, res) => {
  const { keyword, location, title, category, jobType, workSetting, wage, status, educationalLevel, yearsOfExperience, page = 1, limit = 10 } = req.query;
  const filter = {};

  if (keyword) {
    filter.$or = [
      { title: new RegExp(`\\b${keyword}`, 'i') },
      { description: new RegExp(`\\b${keyword}`, 'i') }
    ];
  }

  if (location) {
    filter.location = new RegExp(location, 'i');
  }

  if (title) {
    filter.title = new RegExp(`\\b${title}`, 'i');
  }

  if (category) {
    filter.category = category;
  }

  if (jobType) {
    filter.jobType = { $in: jobType.split(',') };
  }

  if (workSetting) {
    filter.workSetting = { $in: workSetting.split(',') };
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
    const skip = (page - 1) * limit;
    const jobs = await Job.find(filter)
      .populate("companyId", "name")
      // .populate("Category", "name")
      .skip(skip)
      .limit(Number(limit))
      .exec();

    const totalJobsCount = await Job.countDocuments(filter);

    const totalPages = Math.ceil(totalJobsCount / limit);

    res.status(200).json({
      jobs,
      currentPage: page,
      totalPages,
      totalJobs: totalJobsCount
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
