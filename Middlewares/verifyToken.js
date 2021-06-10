
const jwt = require("jsonwebtoken");

function verifyToken(request,response,next){
    const token = request.headers.authorization;
    console.log(token);

    if(token == null){
        response.status(409).send("Not authorization");
    }

    if(token == ''){
        response.status(409).send("Not authorization");
    }

    const payload = jwt.decode(token);
    if(payload == null){
        response.status(409).send("Not authorization");
    }
    request.userID = payload;
    next();

}

module.exports = verifyToken;