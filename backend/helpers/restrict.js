const jwt = require("jsonwebtoken");
const TOKEN_KEY = "omnipotentfatherpotentson";

//Express middleware

const restrict = (req, res, next) => {
    try {
        //Remove token from req.headers
        const token = req.header.authorization.split(" ")[1];
        const data = jwt.verify(token, TOKEN_KEY);
        // res.locals.user = data
        next(); //procede to the next step in controller
    }catch (error) {
        console.log(error);
        res,status(403).send("Unauthorized Access");
    }
};

module.exports = restrict;