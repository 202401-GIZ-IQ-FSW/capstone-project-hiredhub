const Company = require("../../models/Company");

exports.getAllCompanies = async (req, res) => {
  const { search } = req.query;

  const query = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { "CEO.name": { $regex: search, $options: "i" } },
    ];
  }

  try {
    const companies = await Company.find(query);
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCompany = async (req, res) => {
  
  const userId = req.user.id

  const {
    name,
    website,
    description,
    logo,
    location,
    CEO,
    ContactInfo,
    history,
    mission,
    values,
  } = req.body;
  try {
    const newCompany = await Company.create({
      name,
      website,
      description,
      logo,
      location,
      CEO,
      ContactInfo,
      history,
      mission,
      values,
      userId,
    });
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCompanyById = async (req, res) => {
  const { id } = req.params;
  try {
    const company = await Company.findById(id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCompany = async (req, res) => {
  const { id } = req.params;
  const {  name,
    website,
    description,
    logo,
    location,
    CEO,
    ContactInfo,
    history,
    mission,
    values, } = req.body;
  try {
    const updatedCompany = await Company.findByIdAndUpdate(  id,
      {
        $set: {
          name,
          website,
          description,
          location,
          logo,
          linkedinProfile,
          twitterProfile,
          CEO,
          ContactInfo,
          history,
          mission,
          values
        }
      },
      { new: true });
    if (!updatedCompany)
      return res.status(404).json({ message: "Company not found" });
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCompany = await Company.findByIdAndDelete(id);
    if (!deletedCompany)
      return res.status(404).json({ message: "Company not found" });
    res.status(200).json({ message: "Company deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
