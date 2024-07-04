const Job = require("../../models/Job");
const Application = require("./../../models/Application");
const Profile = require("./../../models/Profile");
const User = require("./../../models/User");
const Company = require("./../../models/Company");

const applyForJob = async (req, res) => {
  const userId = req.user.id;
  const { jobId, coverLetter, additionalInformation } = req.body;

  try {
    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    const existingApplication = await Application.findOne({
      jobId,
      applicantId: profile._id,
    });
    if (existingApplication) {
      return res.status(400).json({ error: "Application already exists" });
    }

    const application = new Application({
      jobId,
      applicantId: profile._id,
      coverLetter,
      additionalInformation,
      appliedAt: Date.now(),
    });

    await application.save();

    profile.applications.push(application._id);
    await profile.save();

    res.status(201).json({ application, resume: profile.personalInfo.resume });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getApplicationsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find all applications by the user
    const applications = await Application.find({
      applicantId: userId,
    }).populate("jobId");

    if (!applications.length) {
      return res
        .status(404)
        .json({ message: "No applications found for this user." });
    }

    // Fetch user profile details
    const userProfile = await Profile.findOne({ userId });

    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found." });
    }

    // Prepare the response data
    const response = applications.map((application) => {
      return {
        applicationId: application._id,
        jobId: application.jobId._id,
        jobTitle: application.jobId.title,
        jobDescription: application.jobId.description,
        jobLocation: application.jobId.location,
        status: application.status,
        appliedAt: application.appliedAt,
        numOfInterviews: application.numOfInterviews,
        coverLetter: application.coverLetter,
        additionalInformation: application.additionalInformation,
        userProfile: {
          fullName: userProfile.personalInfo.fullName,
          email: userProfile.personalInfo.email,
          phoneNumber: userProfile.personalInfo.phoneNumber,
          location: userProfile.personalInfo.location,
          resume: userProfile.personalInfo.resume,
        },
      };
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getApplicationsByJobId = async (req, res) => {
  const { jobId } = req.params;
  const employerId = req.user.id;

  try {
    // Find the employer's company
    const employer = await User.findById(employerId);
    if (!employer) {
      return res.status(404).json({ message: "Employer not found." });
    }

    const employerCompany = await Company.findOne({ userId: employerId });
    if (!employerCompany) {
      return res.status(403).json({
        message: "You do not have access to view applications for this job.",
      });
    }

    // Find the job and verify it belongs to the employer's company
    const job = await Job.findById(jobId);
    if (!job || job.companyId.toString() !== employerCompany._id.toString()) {
      return res.status(403).json({
        message: "You do not have access to view applications for this job.",
      });
    }

    // Find all applications for the job
    const applications = await Application.find({ jobId }).populate(
      "applicantId"
    );

    if (!applications.length) {
      return res
        .status(404)
        .json({ message: "No applications found for this job." });
    }

    // Prepare the response data
    const response = await Promise.all(
      applications.map(async (application) => {
        const userProfile = await Profile.findOne({
          userId: application.applicantId.userId,
        });

        return {
          applicationId: application._id,
          applicantId: application.applicantId._id,
          status: application.status,
          appliedAt: application.appliedAt,
          numOfInterviews: application.numOfInterviews,
          coverLetter: application.coverLetter,
          additionalInformation: application.additionalInformation,
          userProfile: {
            fullName: userProfile.personalInfo.fullName,
            email: userProfile.personalInfo.email,
            phoneNumber: userProfile.personalInfo.phoneNumber,
            location: userProfile.personalInfo.location,
            resume: userProfile.personalInfo.resume,
          },
        };
      })
    );

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateApplicationStatus = async (req, res) => {
  const employerId = req.user.id;
  const { applicationId } = req.params;
  const { status, numOfInterviews } = req.body;

  try {
    // Find the company associated with the employer
    const company = await Company.findOne({ userId: employerId });
    if (!company) {
      return res.status(404).json({ message: "Company not found." });
    }

    // Find the application and populate the jobId field to get the job details
    const application = await Application.findById(applicationId).populate(
      "jobId"
    );
    if (!application) {
      return res.status(404).json({ message: "Application not found." });
    }

    // Check if the job belongs to the company of the employer
    if (!application.jobId.companyId.equals(company._id)) {
      return res
        .status(403)
        .json({ message: "Unauthorized to update this application." });
    }

    // Update the application status and number of interviews if provided
    if (status) {
      application.status = status;
    }
    if (numOfInterviews !== undefined) {
      application.numOfInterviews = numOfInterviews;
    }

    // Save the updated application
    await application.save();

    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteApplication = async (req, res) => {
  const applicationId = req.params.id;
  const userId = req.user.id; // Assuming you have user information in req.user

  try {
    // Check if the application belongs to the current user
    const application = await Application.findOne({
      _id: applicationId,
      applicantId: userId,
    });
    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }

    // Delete the application
    await Application.findByIdAndDelete(applicationId);

    res.json({ message: "Application deleted successfully" });
  } catch (err) {
    console.error("Error deleting application:", err);
    res.status(500).json({ error: "Server error" });
  }
};

const deleteApplicationByCompany = async (req, res) => {
  const employerId = req.user.id;
  const { applicationId } = req.params;

  try {
    // Find the company associated with the employer
    const company = await Company.findOne({ userId: employerId });
    if (!company) {
      return res.status(404).json({ message: "Company not found." });
    }

    // Find the application and populate the jobId field to get the job details
    const application = await Application.findById(applicationId).populate(
      "jobId"
    );
    if (!application) {
      return res.status(404).json({ message: "Application not found." });
    }

    // Check if the job belongs to the employer's company
    const job = application.jobId;
    if (!job || job.companyId.toString() !== employerId) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // Delete the application
    await Application.findByIdAndDelete(applicationId);

    res.json({ message: "Application deleted successfully" });
  } catch (err) {
    console.error("Error deleting application:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  applyForJob,
  getApplicationsByUserId,
  getApplicationsByJobId,
  updateApplicationStatus,
  deleteApplication,
  deleteApplicationByCompany,
};
