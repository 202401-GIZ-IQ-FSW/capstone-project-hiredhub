const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    requirements: {
      educationalLevel: {
        type: String,
      },
      yearsOfExperience: {
        type: Number,
      },
      certifications: [
        {
          type: String,
        },
      ],
      skills: [
        {
          type: String,
        },
      ],
    },
    applicationDetails: {
      deadline: {
        type: Date,
        required: true,
      },
      method: {
        type: String,
      },
    },
    views: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["open", "closed", "paused"],
      default: "open",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
