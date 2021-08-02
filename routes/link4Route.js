const express = require("express");
const router = express.Router();

router.get("/link4", (req, res, next) => {
  res.render("link4.hbs", {
    style: ["style.css"],
  });
});

module.exports = router;
