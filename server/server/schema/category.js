const { body } = require("express-validator");
const categorySchema = [
  body("name")
    .notEmpty()
    .withMessage("name cant be empty")
    .isLength({ min: 3 })
    .withMessage("minimum length is 3 letter"),
];

module.exports = { categorySchema };
