const mongoose = require('mongoose');
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
        phoneNumber: { type: String, required: true }, //so that the leading zero is stored
        location: { type: String, required: true },
        resume: { type: String, default: '' },
        profilePicture: { type: String, default: '' },
    },
    applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application"}],
    savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job"}],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

profileSchema.virtual('personalInfo.fullName').get(function() {
  return `${this.personalInfo.firstName} ${this.personalInfo.lastName}`;
});

profileSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    if (ret.personalInfo) {
      ret.personalInfo.fullName = `${ret.personalInfo.firstName} ${ret.personalInfo.lastName}`;
    }
    return ret;
  }
});

module.exports = mongoose.model("Profile", profileSchema);
