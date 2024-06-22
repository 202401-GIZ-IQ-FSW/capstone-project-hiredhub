const Applications = require("./../../models/Application");

const createApplication = async (req, res) => {
  const {
    jobId,
    applicantId,
    status,
    appliedAt,
    coverLetter,
    additionalInformation,
    numOfInterviews,
  } = req.body;

  try {
    const existingApplication = await Applications.findOne({
      jobId,
      applicantId,
    });
    if (existingApplication) {
      return res.status(400).json({
        message: "Application already exists for this job and applicant.",
      });
    }

    const application = new Applications({
      jobId,
      applicantId,
      status,
      appliedAt,
      coverLetter,
      additionalInformation,
      numOfInterviews,
    });

    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getApplicationsByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const userApplications = await Applications.find({ applicantId: userId });
    if (userApplications == false) {
      return res
        .status(404)
        .json({ message: "No applications found for this user." });
    }
    res.status(200).json(userApplications);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getApplicationsByJobId = async (req, res) => {
  const { jobId } = req.params;
  try {
    const jobApplications = await Applications.find({ jobId });
    if (jobApplications == false) {
      return res
        .status(404)
        .json({ message: "No applications found for this job." });
    }
    res.status(200).json(jobApplications);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateApplication = async (req, res) => {
  const { id } = req.params;
  const {
    jobId,
    applicantId,
    status,
    appliedAt,
    coverLetter,
    additionalInformation,
    numOfInterviews,
  } = req.body;

  try {
    const application = await Applications.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found." });
    }
    if (jobId) {
      application.jobId = jobId;
    }
    if (applicantId) {
      application.applicantId = applicantId;
    }
    if (status) {
      application.status = status;
    }
    if (appliedAt) {
      application.appliedAt = appliedAt;
    }
    if (coverLetter) {
      application.coverLetter = coverLetter;
    }
    if (additionalInformation) {
      application.additionalInformation = additionalInformation;
    }
    if (numOfInterviews) {
      application.numOfInterviews = numOfInterviews;
    }
    await application.save();
    res.status(200).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteApplication = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await Applications.findByIdAndDelete(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found." });
    }
    res.status(200).json({ message: "Application deleted successfully." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createApplication,
  getApplicationsByUserId,
  getApplicationsByJobId,
  updateApplication,
  deleteApplication,
};
