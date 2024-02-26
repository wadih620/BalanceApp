const express = require("express");
const router = express.Router();
const User = require("../models/user");

//creating one
router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    current_balance: req.body.current_balance,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//getting one
router.get("/:username", async (req, res) => {
  try {
    const username = req.params.username;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const userData = {
      username: user.username,
      password: user.password,
      current_balance: user.current_balance,
    };
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//deleting one

module.exports = router;
