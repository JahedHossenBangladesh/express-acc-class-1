var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/id", function (req, res, next) {
  res.send("this is for id");
});

router.get(
  "/journey",
  function (req, res, next) {
    console.log("1st middle ware");
    next();
  },
  function (req, res, next) {
    console.log("2nd middle ware");
    next();
  },
  function (req, res, next) {
    console.log("This is 3rd");
    return res.send("I am all done");
  }
);

module.exports = router;
