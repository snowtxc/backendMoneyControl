const handleFatalError = require("../functions/handleFatalError");
const OperationCategoryModel = require("../Models/Operation_Category");


var OperationCategoryController = {
    create:  async function(request,response){
        const idOperation = request.params.idCategory;
        const idCategory = request.params.idOperation;
         
        OperationCategoryModel.create({OperationId:idOperation,CategoryId:idCategory}).then((result) =>{
            response.status(200).send("Category associate correctly");
        }).catch((err) =>{
            handleFatalError(err);
            response.status(500).send("Something broken!");
        })
    },

}


module.exports = OperationCategoryController;