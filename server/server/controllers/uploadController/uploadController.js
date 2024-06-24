const multer = require('multer');
const Profile = require('../../models/Profile');

const upload = multer({
  dest: 'uploads/', // Temporary storage location
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
});

exports.uploadProfilePicture = upload.single('profilePicture'), async (req, res) => {
  try {
    const profile = await Profile.findById(req.user.id); // Replace with your authentication logic

    if (!profile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    profile.personalInfo.profilePicture = req.file.filename;
    await profile.save();

    res.json({ message: 'Profile picture uploaded successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.uploadCV = upload.single('cv'), async (req, res) => {
  try {
    const profile = await Profile.findById(req.user.id); // Replace with your authentication logic

    if (!profile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    profile.personalInfo.resume = req.file.filename;
    await profile.save();

    res.json({ message: 'CV uploaded successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
