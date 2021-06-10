//    /operations       metodo Http: POST      OperationController.create   Y
//    /operations        metodo Http: GET   OperationController.getByUserID   V
//    /operations /: id       metodo Http: PUT            OperationController.editById  V
//    / operations /: id       metodo Http: DELETE        OperationController.deleteById V



const OperationModel = require("../Models/Operation");

const CategoryModel = require("../Models/Category");

const handleFatalError = require("../functions/handleFatalError");
const e = require("express");


var OperationController = {
    create: async function (request, response) {
        const body = request.body; 
        const iduser = request.userID;
        OperationModel.create({concept:body.concept,type: body.type,amount: body.amount,date: body.date,UserId:iduser}).then((result) =>{
            response.status(200).send("Operation created succesfully!");
        }).catch((err) =>{
            handleFatalError(err);
            response.status(500).send("Something broken!")
        })
    },

    getByUserID: async function (request, response) {
        const iduser = request.userID;
        let CURRENT_BALANCE = 0;
        OperationModel.findAll({include:[CategoryModel], where:{ UserId:iduser}}).then((operations) =>{
           operations.forEach((item) =>{
                let type = item.dataValues.type;
                if(type === 'ingreso'){
                    CURRENT_BALANCE = CURRENT_BALANCE + item.amount;
                }else if(type === 'egreso'){
                    CURRENT_BALANCE = CURRENT_BALANCE - item.amount;
                }
            })

            response.status(200).send({
                Operaciones: operations,
                current_value: CURRENT_BALANCE        
            });

        }).catch((error) =>{
            handleFatalError(error);
            response.status(500).send("Something broken!")
        });
    },

    editById: async function (request, response) {
        const body = request.body;
        const idOperation = request.params.id;
        OperationModel.update({concept: body.concept, amount: body.amount},{where: {id:idOperation}}).then((result) =>{
            if(result[0] === 0){
                response.status(500).send("Something broken!");
            }else{
                response.status(200).send("Operation edited succesfully");
            }
        }).catch((error) =>{
            handleFatalError(error);
            response.status(500).send("Something broken!")
        })
    },

    deleteById: async function (request, response) {
        const idOperation = request.params.id;
        OperationModel.destroy({ where: { id: idOperation } }).then((result) => {
            if (result === 0) {
                response.status(500).send("Something broken!");
            } else {
                response.status(200).send("Operation deleted succesfully");
            }
        }).catch((error) => {
            handleFatalError(error);
            response.status(500).send("Something broken!")
        })
    },
}





module.exports = OperationController;