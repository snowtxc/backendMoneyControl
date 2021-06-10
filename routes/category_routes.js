

const router = require("express").Router();
const CategoryController = require("../Controllers/CategoryController");

const verifyToken = require("../Middlewares/verifyToken");


router.post("/category",verifyToken,CategoryController.create);
router.get("/category",verifyToken,CategoryController.getByUser);

module.exports = router;
