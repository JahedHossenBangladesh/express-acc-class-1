var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ name: "jahed Hossen", age: 32 });
});
router.get(
  "/about",
  function (req, res, next) {
    console.log("Method", req.method);
    next();
  },

  function (req, res, next) {
    res.json({ nmae: "jamal", age: 44, post: "Darowan" });
  }
);

module.exports = router;
