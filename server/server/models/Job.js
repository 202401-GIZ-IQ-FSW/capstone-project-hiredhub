const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  field: {
    type: String,
    enum: ['Development','Engineering', 'Marketing', 'Finance', 'Healthcare', 'Education', 'Other'], 
    required: true
  },
  category: {
    type: String,
    enum: ['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Temporary', 'Freelance'], 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  employment: {
    type: String,
    required: true
  },
  wage: {
    type: Number,
    required: true
  },
  minEduLevel: {
    type: String,
    enum: ['High School', 'Associate', 'Bachelor', 'Master', 'Doctorate'],
    required: true
  },
  yearExperience: {
    type: String,
    enum: ['0-1 years', '1-3 years', '3-5 years', '5-7 years', '7+ years'], 
    required: true
  },
  certifications: {
    type: [String]
  },
  skills: {
    type: [String],
    required: true
  },
  appMethod: {
    type: String,
    enum: ['Online', 'Email', 'In-Person'],
    required: true
  },
  appDeadline: {
    type: Date,
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  applicants: {
    type: [String]
  }
});


module.exports = mongoose.model("Job", jobSchema);
