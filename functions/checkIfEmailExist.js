
const UserModel = require("../Models/User");


function checkIfEmailExist(email,callback){
    UserModel.findOne({where: {email:email}}).then((result) =>{
        if(!result){
            callback(false);
        }else{
            callback(true);
        }
    })
}

module.exports = checkIfEmailExist;