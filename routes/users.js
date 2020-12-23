var express = require("express");
var router = express.Router();
const middleware = require("../middleware/middleware");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/id", function (req, res, next) {
  res.send("this is for id");
});

router.get("/journey", middleware.first, middleware.second, middleware.third);

module.exports = router;
