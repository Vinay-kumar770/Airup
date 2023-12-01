const express= require("express");
const router= express.Router();
const authcontrol= require("../controllers/auth")


router.route("/").get(authcontrol.home);

router.route("/submit").post(authcontrol.submit);

router.route("/register").post(authcontrol.register);
router.route("/login").post(authcontrol.login);


module.exports= router;