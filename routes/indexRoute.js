const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index.hbs", {
    style: ["style.css"],
  });
});

module.exports = router;
