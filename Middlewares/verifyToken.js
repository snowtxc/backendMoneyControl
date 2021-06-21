
const jwt = require("jsonwebtoken");

function verifyToken(request,response,next){
    const token = request.headers.authorization;
    
    if(!token){
           response.status(409).send("Not authorizations");
           return;
    }

    if(token == ''){
        response.status(409).send("Not authorization");
        return;
    }

   const payload = jwt.decode(token);
   if(payload == null){
       response.status(409).send("Not authorization");
       return;
    }
    request.userID = payload;
    console.log(request.userID);
    next();

}

module.exports = verifyToken;