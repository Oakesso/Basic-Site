const express = require("express");
const router = express.Router();

router.get("/link3", (req, res, next) => {
  res.render("link3.hbs", {
    style: ["style.css"],
  });
});

module.exports = router;
