
const handleFatalError = require("../functions/handleFatalError");
const CategoryModel  = require("../Models/Category");
var CategoryController = {
    create: async function(request,response){
        const body = request.body;
        const IDUSER = request.userID;
        CategoryModel.create({name: body.name,UserId:IDUSER}).then((result) =>{
            response.status(200).send("Category created succesfully!");

        }).catch((err) =>{
            handleFatalError(err);
            response.status(500).send("Something broken!");
        })
    },
    
    getByUser: async function(request,response){
        const IDUSER = request.userID;
        CategoryModel.findAll({where:{UserId: IDUSER}}).then((categories) =>{
            response.status(200).send(categories);
        }).catch((err) =>{
            handleFatalError(err);
            response.status(500).send("Something Broken!");
        })
    }

}

module.exports = CategoryController;