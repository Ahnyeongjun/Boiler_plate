const router = require('express')();
const controller = require("../controller/user/controller");
const auth = require("../middleware/auth");


router.post("/", controller.register);
// router.get("/auth", controller.auth);
router.post("/login", controller.login);
// router.post("/logout", controller.logout);
router.get("/refresh", auth.refreshMiddleware, controller.refresh);

module.exports = router;
