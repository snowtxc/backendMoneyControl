const UserModel = require("./User");
const OperationModel = require("./Operation");
const CategoryModel = require("./Category");


const conexion = require("../database");


//One to many
UserModel.hasMany(OperationModel,{foreignKey: 'UserId'});
OperationModel.belongsTo(UserModel);



//One to many
UserModel.hasMany(CategoryModel,{foreignKey: 'UserId'});
CategoryModel.belongsTo(UserModel);


//One to one
CategoryModel.hasOne(OperationModel,{foreignKey: 'CategoryId',onDelete: 'SET NULL',onUpdate:'SET NULL'});
OperationModel.belongsTo(CategoryModel);



