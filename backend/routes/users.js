const { Router } = require("express");
const controllers = require("../controllers/users");

const router = Router();

//Routes

router.post("/sign-in", controllers.signIp);
router.post("/sign-up", controllers.signUp);
router.get("/verify", controllers.verify);

module.exports = router;
