const moongose = require("mongoose");

const userSchema = new moongose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,

    required: true,
    unique: true,
    validate: {
      validator: async function (value) {
        const user = await this.constructor.findOne({ email: value });
        return !user;
      },
      message: "Email already exists",
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["jobSeeker", "employer"],
    required: true,
  },
  //    this date is for the user to know when he created his account
  date: {
    type: Date,
    default: Date.now,
  },
});

export default moongose.model("User", userSchema);
