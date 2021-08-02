const express = require("express");
const router = express.Router();

router.get("/link5", (req, res, next) => {
  res.render("link5.hbs", {
    style: ["style.css"],
  });
});

module.exports = router;
