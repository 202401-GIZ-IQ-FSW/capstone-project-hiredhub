const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    wage: {
    type: Number,
    required: true
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
        type: [String],
        enum: ['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Temporary', 'Freelance', 'On-site', 'Hybrid', 'Remote'], 
        required: true
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
        enum: ['High School', 'Associate', 'Bachelor', 'Master', 'Doctorate'],
      },
      yearsOfExperience: {
        type: Number,
        enum: ['0-1 years', '1-3 years', '3-5 years', '5-7 years', '7+ years'] 
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
    applicants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
      }
    ],
    status: {
      type: String,
      enum: ["open", "closed", "paused"],
      default: "open",
    },
  },
  {
    timestamps: true,
  })


module.exports = mongoose.model("Job", jobSchema); 