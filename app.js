const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Express app is running on port ${port}`);
});
