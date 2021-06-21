const router = require("express").Router();
const UserController = require("../Controllers/UserController");

router.post("/auth/register", UserController.signUp);
router.post("/auth/login", UserController.sigIn);


module.exports = router; 