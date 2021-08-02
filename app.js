require("./config/dbConnection");

const mongoose = require("mongoose");

//const createError = require('http-errors');
const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const PORT = 3000;
//const logger = require('morgan');

const indexRouter = require("./routes/indexRoute");
const userRouter = require("./routes/userRoute");
const link3Router = require("./routes/link3Route");
const link4Router = require("./routes/link4Route");
const link5Router = require("./routes/link5Route");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.use("/", indexRouter);
app.use("/", userRouter);
app.use("/", link3Router);
app.use("/", link4Router);
app.use("/", link5Router);

// app.use((req, res, next) => {
//   next(createError(404));
// });

// app.use((err, req, res, next) => {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:`, PORT);
});

module.exports = app;
