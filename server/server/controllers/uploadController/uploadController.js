const Profile = require('../../models/Profile');

exports.uploadProfilePicture = async (req, res) => {
  try {
    const profile = await Profile.findById(req.body.profileId);
    if (!profile) {
      return res.status(404).send('Profile not found');
    }
    profile.personalInfo.profilePicture = req.file.path;
    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.uploadResume = async (req, res) => {
  try {
    const profile = await Profile.findById(req.body.profileId);
    if (!profile) {
      return res.status(404).send('Profile not found');
    }
    profile.personalInfo.resume = req.file.path;
    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
