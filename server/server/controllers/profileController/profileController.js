const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Job = require("../../models/Job");
const Application = require("../../models/Application");

exports.getProfile = async (req, res) => {
  const userId = req.user.id;
  try {
    const profile = await Profile.findOne({ userId: userId });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createProfile = async (req, res) => {
  const { firstName, lastName, phoneNumber, location } = req.body;
  const userId = req.user.id;
  const profilePicture =
    req.files["profilePicture"][0].filename === undefined
      ? ""
      : `${process.env.BASE_URL}/backend-app/server/files/${req.files["profilePicture"][0].filename}`;

  const resume =
    req.files["resume"][0].filename === undefined
      ? ""
      : `${process.env.BASE_URL}/backend-app/server/files/${req.files["resume"][0].filename}`;
  try {
    const existingProfile = await Profile.findOne({ userId: userId });
    if (existingProfile) {
      return res.status(400).json({ error: "Profile already exists" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const newProfile = await Profile.create({
      userId,
      personalInfo: {
        firstName,
        lastName,
        email: user.email,
        phoneNumber,
        location,
        resume,
        profilePicture,
      },
    });

    res.status(201).json(newProfile.toObject({ virtuals: true }));
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateProfile = async (req, res) => {
  const { firstName, lastName, phoneNumber, location, resume, profilePicture } =
    req.body;
  const userId = req.user.id;
  try {
    let profile = await Profile.findOne({ userId: userId });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    profile = await Profile.findOneAndUpdate(
      { userId },
      {
        $set: {
          "personalInfo.firstName": firstName,
          "personalInfo.lastName": lastName,
          "personalInfo.phoneNumber": phoneNumber,
          "personalInfo.location": location,
          "personalInfo.resume": resume,
          "personalInfo.profilePicture": profilePicture,
        },
      },
      { new: true }
    );

    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.addSavedJobs = async (req, res) => {
  const { jobId } = req.params;
  const userId = req.user.id;
  try {
    const job = await Job.findById(jobId);

    // Check if the job exists
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    // Check if the profile exists
    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    // Check if the job is already in the saved jobs
    if (profile.savedJobs.includes(jobId)) {
      return res.status(400).json({ error: "Job already saved" });
    }

    // Add the job to the saved jobs
    profile.savedJobs.push(jobId);
    await profile.save();

    res.status(200).json({
      message: "Job saved successfully",
      savedJobs: profile.savedJobs,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.removeSavedJobs = async (req, res) => {
  const { jobId } = req.params;
  const userId = req.user.id;
  try {
    // Check if the profile exists
    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    const jobIndex = profile.savedJobs.indexOf(jobId);
    if (jobIndex === -1) {
      return res.status(404).json({ error: "Job not found" });
    }

    profile.savedJobs.pull(jobId);
    await profile.save();
    res.status(200).json({
      message: "Job removed from saved jobs",
      savedJobs: profile.savedJobs,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getSavedJobs = async (req, res) => {
  const userId = req.user.id;
  try {
    // Find the user's profile and populate saved jobs
    const profile = await Profile.findOne({ userId }).populate("savedJobs");
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json(profile.savedJobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getApplicationHistory = async (req, res) => {
  const userId = req.user.id;
  try {
    // Find the user's profile and populate applications
    const profile = await Profile.findOne({ userId }).populate("applications");
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    // Extract application IDs from the profile
    const applicationIds = profile.applications.map((app) => app._id);

    // Fetch all applications with details using the extracted IDs
    const applications = await Application.find({
      _id: { $in: applicationIds },
    });

    // Prepare the response with application details
    const applicationHistory = applications.map((app) => ({
      jobId: app.jobId,
      status: app.status,
      appliedAt: app.appliedAt,
      coverLetter: app.coverLetter,
      additionalInformation: app.additionalInformation,
      numOfInterviews: app.numOfInterviews,
    }));

    res.status(200).json(applicationHistory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
