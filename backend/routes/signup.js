const express = require("express");
const router = express.Router();
const SignUp = require("../models/Signupmodel");

router.post("/", async (req, res) => {
  console.log(req.body);
  const signup = new SignUp({
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    password: req.body.password,
    conPassword: req.body.conPassword,
  });
  try {
    const savedSignUp = await signup.save();
    res.json(savedSignUp);
  } catch (err) {
    res.json({ message: err });
  }
});



module.exports = router;
