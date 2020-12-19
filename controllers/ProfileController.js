const User = require("../models/UserModel");

exports.getProfileInfo = async (req, res) => {
  try {
    const user = await User.findById(req.decodedUser._id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.updateProfileInfo = async (req, res) => {
  //TODO: update profile fn.
  try {
    const editInfo = req.body;
    const user = await User.findByIdAndUpdate(req.user.userData._id, editInfo, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
