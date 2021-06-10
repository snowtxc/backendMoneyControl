const UserModel = require("./User");
const OperationModel = require("./Operation");
const CategoryModel = require("./Category");
const OperationCategory = require("./Operation_Category");

const conexion = require("../database");


//One to many
UserModel.hasMany(OperationModel,{foreignKey: 'UserId'});
OperationModel.belongsTo(UserModel);



UserModel.hasMany(CategoryModel,{foreignKey: 'UserId'});
CategoryModel.belongsTo(UserModel);



//Many to many
OperationModel.belongsToMany(CategoryModel, {
    through: 'Operation_Category'
})

CategoryModel.belongsToMany(OperationModel, {
    through: 'Operation_Category',
});



