module.exports.first = function (req, res, next) {
  console.log("first middleware");
  next();
};
module.exports.second = function (req, res, next) {
  console.log("Second middleware");
  next();
};
module.exports.third = function (req, res, next) {
  console.log("Third middleware");
  return res.send("I am done");
};
