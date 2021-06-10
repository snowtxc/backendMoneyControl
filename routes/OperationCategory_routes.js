const router = require("express").Router();
const OperationCategoryController = require("../Controllers/OperationCategory");

//Middlewares
const verifyToken = require("../Middlewares/verifyToken");


router.post("/operationsCategory/:idCategory/:idOperation/create",verifyToken,OperationCategoryController.create);





module.exports = router;