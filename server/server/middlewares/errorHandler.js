const { validationResult } = require("express-validator");

function errorHanlder(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  next();
}

module.exports = { errorHanlder };
