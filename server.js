const express = require("express");
const bodyParser = require("body-parser");

const app = new express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Archivos de rutas
const user_routes = require("./routes/user_routes");
const operation_routes = require("./routes/operation_routes");
const category_routes = require("./routes/category_routes");



//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Rutas
app.use('/api',user_routes);
app.use('/api',operation_routes);
app.use('/api',category_routes);


//Exportacion

module.exports = app;