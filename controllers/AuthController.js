const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
const checkFunction = require('../helpers/checkFunction');

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Field Validation
  const validationErr = validationResult(req);
  checkFunction(res, validationErr?.errors?.length > 0, validationErr.array());

  // User exist check
  const userData = await User.findOne({ email });
  checkFunction(res, userData, "User already exists!!");

  // Password hash
  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password, salt);

  // Save User
  const user = new User({
    firstName,
    lastName,
    email,
    password: newPassword,
  });
  await user.save();

  //TODO: Error handling for saving
  res.send("Register Completed.");
};

exports.authLogin = async (req, res) => {
  const { email, password } = req.body;

  // Field Validation
  const validationErr = validationResult(req);
  checkFunction(res, validationErr?.errors?.length > 0, validationErr.array());

  // User exist check
  const userData = await User.findOne({ email });
  checkFunction(res, !userData, "User doesn't exists!!");

  // Password compare
  const isPasswordMatch = await bcrypt.compare(password, userData.password);
  checkFunction(res, !isPasswordMatch, "Invalid credentials");

  // JSON WEB TOKEN - JWT
  jwt.sign(
    { userData },
    process.env.JWT_SECRET_KEY,
    { expiresIn: 3600 },
    (err, token) => {
      checkFunction(res, err, "Unknown Error");
      res.status(202).json({ token });
    }
  );
};

