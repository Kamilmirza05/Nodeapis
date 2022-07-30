const jwt = require("jsonwebtoken");
require('dotenv').config();
module.exports = async(req, res,next)=>{

    try {
        const jwtToken = req.header("token");

        if(!jwtToken){
            return res.status(401).json("unauthorize")
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);
        req.user = payload.user;
        
    } catch (err) {
        console.log(err)
        return res.status(403).send("u are not authorize")
    }
} 