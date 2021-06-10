const SEQUELIZE = require("sequelize");

const config  = require("./configDB.js");

const con = new SEQUELIZE(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql'
});

try{
    con.authenticate();
    console.log("Conexion a base de datos establecida!");
}catch(error){
    console.log("Ha ocurrido un error al conectarse a la base de datos!");

}



module.exports = con;