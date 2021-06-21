
const router = require("express").Router();
const OperationController = require("../Controllers/OperationController");
const verifyToken = require("../Middlewares/verifyToken");


router.post("/operations", verifyToken ,OperationController.create);
router.get("/operations", verifyToken,OperationController.getByUserID);
router.put("/operations/:id",verifyToken,OperationController.editById);
router.delete("/operations/:id",verifyToken,OperationController.deleteById);
router.post("/operations/associateCategory",verifyToken,OperationController.setCategory);


module.exports = router;