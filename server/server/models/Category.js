const mongoose = require("mongoose");

const categoryEnum = [
  "Software Development",
  "Software Engineering",
  "Web Development",
  "Data Science",
  "Accounting",
  "Finance",
  "Administrative",
  "Architecture",
  "Engineering",
  "Art & Design",
  "Customer Service",
  "Education",
  "Healthcare",
  "Human Resources",
  "Legal",
  "Logistics",
  "Marketing",
  "Media",
  "Non-Profit",
  "Operations Management",
  "Project Management",
  "Research",
  "Retail",
  "Sales",
  "Security",
  "Social Services",
  "Writing"
];

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    enum: categoryEnum,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
