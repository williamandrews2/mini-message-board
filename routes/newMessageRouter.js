const { Router } = require("express");
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.send("This is where a new message will be constructed or rendered.");
});

module.exports = newMessageRouter;
