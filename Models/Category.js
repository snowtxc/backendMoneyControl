const conexion = require("../database");
const { DataTypes } = require("sequelize");



const CategoryModel = conexion.define("Category", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

})




module.exports = CategoryModel;


