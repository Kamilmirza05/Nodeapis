const jwt = require("jsonwebtoken");
require('dotenv').config();



function jwtgenerator(user_id){

    const payload ={

        user:user_id
    }
    return jwt.sign(payload,process.env.jwtSecret,{expiresIn: "2hr"})
}

module.exports = jwtgenerator;
