const router = require('express')();
const controller = require("../controller/user/controller");


router.post("/", controller.register);
// router.get("/auth", controller.auth);
router.post("/login", controller.login);

module.exports = router;
