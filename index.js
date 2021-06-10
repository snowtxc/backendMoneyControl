
const server = require("./server");
const PORT = process.env.PORT || 3005;


const conexion = require("./database");  //Carga objeto conexion a la base de datos
require("./Models/loadModels");  //Carga modelos y asociaciones



server.listen(PORT,function(){
    console.log("Servidor iniciado! PUERTO: " + PORT);
    conexion.sync();
    

})
