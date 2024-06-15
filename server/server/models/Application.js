const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
    status: { 
        type: String, 
        enum: [
            'Pending',
            'Under Review',
            'Interview scheduled',
            'Interviewed',
            'Offered',
            'Hired',
            'Rejected',
            'Withdrawn'
        ],
        default: 'Pending'
    },
    appliedAt: { type: Date, default: Date.now},
    coverLetter: { type: String, default: ''},
    additionalInformation: { type: String, default: '' },
    numOfInterviews: { type: Number, default: 0 }
});

module.exports = mongoose.model("Application", applicationSchema);