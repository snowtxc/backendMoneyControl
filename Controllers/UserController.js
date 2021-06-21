 
const jwt = require("jsonwebtoken");
const con = require("../database");

const handleFatalError = require("../functions/handleFatalError");

const UserModel = require("../Models/User");

const checkIfEmailExist = require("../functions/checkIfEmailExist");

var UserController ={
    signUp: async function(request,response){
        const body = request.body;
        checkIfEmailExist(body.email, (exist) => {
            if (exist) {  response.status(500).send("Email already registered") }

            UserModel.create({ email: body.email, password: body.password, username: body.username }).then((user) => {
                const token = jwt.sign(user.dataValues.id, "user_key");
                response.status(200).send({
                    token: token,
                    msg: "User created succesfully!",
                    user:user
                });
            }).catch((error) => {
                handleFatalError(error);
                response.status(500).send("Something broken!");
            });
        })
    },

    
    sigIn: async function(request,response){
        const body = request.body;
        UserModel.prototype.validateUser(body.email,body.password,(err,user) =>{
            if(err){
                response.status(500).send("Something broken!");
            }else if(!user){
                response.status(409).send("Authenticacion erronea");
            }else if(user){
                const token = jwt.sign(user.id,"user_key");
                response.status(200).send({
                    token: token,
                    msg: "Authentication exitosa!",
                    user:user
                });
            }
        }); 
    },
}

module.exports = UserController;