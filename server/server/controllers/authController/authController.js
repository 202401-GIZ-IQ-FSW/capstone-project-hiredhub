const User = require('../../models/User');
const bcrypt = require('bcrypt');
const generateToken = require('../../utils/token');

exports.signup = async (req, res) => {
  const { email, password, password2, role } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Check if the passwords match
    if (password !== password2) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    user = await User.create({
      email,
      password: hashedPassword,
      role
    });

    // Generate a token
    const token = generateToken(user);

    // Return the user (without password) and access token
    res.status(201).json({
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      },
      access_token: token
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body

  try{
    //check if the user exists
    const user = await User.findOne({ email })
    if(!user){
      return res.status(401).json({ error: "Invalid email"})
    }

    //check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password)
    if(!passwordMatch){
      return res.status(401).json({ error: "Invalid password" })
    }

     // Generate a token
    const token = generateToken(user)

    // Return user (without password) and access token
    res.status(201).json({
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      },
      access_token: token
    });
  }catch(err){
    res.status(400).json({ error: err.message });
  }
}

exports.signout = async (req, res) => {
   // logout in a JWT context is handled on the client side
  // by simply removing the token from local storage
  res.json({ message: 'Logout successful' });
}

exports.googleCallback = async (req, res) => {
  try {
    const user = req.user;
    const token = generateToken(user);

    // Return user (without password) and access token
    res.status(201).json({
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      },
      access_token: token
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.setRole = async (req, res, next) => {
  // Store the role in session
  req.session.role = req.query.role || 'jobSeeker'; // Default role if none provided
  next();
};