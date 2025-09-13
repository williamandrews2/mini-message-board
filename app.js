const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// import routes to the app
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Express app is running on port ${port}`);
});
