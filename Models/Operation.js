const conexion = require("../database");
const { DataTypes } = require("sequelize");



const OperationModel = conexion.define("Operation", {
    concept: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },

    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

  

})




module.exports = OperationModel;



