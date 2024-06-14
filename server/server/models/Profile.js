const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    personalInfo: {
        firstName: { type: String, required: true},
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phoneNumber: { type: Number, required: true },
        location: { type: String, required: true },
        resume: { type: String, default: '' },
        profilePicture: { type: String, default: '' },
    },
    applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application"}],
    savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job"}],
  },
  { timestamps: true }
);

profileSchema.virtual('fullName').get(function() {
    return `${this.personalInfo.firstName} ${this.personalInfo.lastName}`;
});

module.exports = mongoose.model("Profile", profileSchema);
