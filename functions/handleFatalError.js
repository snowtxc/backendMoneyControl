function handleFatalError(error){
    console.error(error.message);
    console.log(error.stack);
}



module.exports = handleFatalError;