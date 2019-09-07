const express = require("express");
const session = require("express-session");
const router = express.Router();
const userCtl = require("../controllers/userctl");
const authCheck = require("../middlewares/authCheck");

router.post("/login", userCtl.userLogin);

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", userCtl.userLogout);

router.get("/register", userCtl.userRegister);

router.get("/profile", authCheck, (req, res) => {
  res.render("profile");
});
module.exports = router;
