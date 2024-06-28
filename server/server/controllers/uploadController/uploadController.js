const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "..", "..", "files");

exports.getFile = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadDir, filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("File not found:", err);
      return res.status(404).send("File not found");
    }

    res.sendFile(filePath, (err) => {
      if (err) {
        console.error("Error sending file:", err);
        return res.status(500).send("Error sending file");
      }
    });
  });
};
