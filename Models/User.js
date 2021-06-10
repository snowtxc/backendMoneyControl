const conexion = require("../database");
const {DataTypes} = require("sequelize");

const bcrypt = require("bcrypt");
const handleFatalError = require("../functions/handleFatalError");
const { response } = require("express");
const saltRounds = 10;


const UserModel  = conexion.define("User",{
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value){
            const encrypted = bcrypt.hashSync(value,saltRounds);
            this.setDataValue('password',encrypted);
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }  
})


UserModel.prototype.validateUser = async function(email,password,callback){
    UserModel.findOne({where:{email:email}}).then((user) =>{
        if(!user){
            callback(null,false);
        }
        const succesValidate = bcrypt.compareSync(password,user.password);
        if(succesValidate){
            callback(null,user);
        }else{
            callback(null,false);
        }
    }).catch((error) =>{
        handleFatalError(error);
        callback(true,null);
    })
}


module.exports = UserModel;



