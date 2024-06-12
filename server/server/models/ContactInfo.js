const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema({
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  twitter: {
    type: String,
  },
});

module.exports = mongoose.model('ContactInfo', contactInfoSchema);
