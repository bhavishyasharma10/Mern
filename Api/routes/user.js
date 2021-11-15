const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("UserTEst Success ");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send("PoST sucess for " + username);
});
module.exports = router;
