const { check } = require("express-validator");

const checkEmail = check("email", "Please enter a valid e-mail").isEmail();
const checkPassword = check(
  "password",
  "Please enter a password with 6 and more chars"
).isLength({ min: 8 });

exports.emailPasswordValidation = [checkEmail, checkPassword];
