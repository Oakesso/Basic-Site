const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

router.get("/user", (req, res, next) => {
  res.render("user.hbs", {
    style: ["style.css"],
  });
});

module.exports = router;
