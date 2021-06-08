const router = require("express").Router();
const apiRoutes = require("./api");

//TODO: MAKE DATA CALLS HERE

//possibly call to seed
//possibly change res.send( ) to actually output the data

router.use("/api", apiRoutes);
router.use("/*", (req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});
module.exports = router;
