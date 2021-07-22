const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const db = require("../db/connection");

db.model("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = 23;
const TOKEN_KEY = "omnipotentfatherpotentson";

const signUp = async(req, res) => {
    try {
        // Retrieve user data 
        const { username, email, password } = req.body;
        // Hash password
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
        // Create new user
        const user = new User({
            username,
            email,
            password_digest,
        });
        // Save new user
        await user.save();
        // Create JWT
        const payload = {
            username: user.username,
            email: user.email,
        };
        // Create token
        const token = jwt.sign(payload, TOKEN_KEY);
        res.send(201).json({token})
    }catch (error) {
        res.status(400).json({error:error.message})
    }
};


const signIn = async(req, res) => {
    try {
        // Retrieve user  data
        const { username, password } = req.body;
        // Check if username is present
        const user = await User.findOne({username: username});
        // compare plain text password with hashed password from the database
        if(await bcrypt.com(are(password, user.password_digest))) {
            const payload = {
                username: user.username,
                email: user.email,
            };
            const token = jwt.sign(payload, TOKEN_KEY); // signs in user
            res.status(201).json({token});
        }else {
            res.status(401).send("Invalid credentials");
        }

    }catch (error){
        res.status(500).json({error: error.message});
    }
};



// Whenever a user is trying to access authorization-blocked routes, verify to make sure they're signed in

const verify = async(req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, TOKEN_KEY); // checks if token is valid
        if(payload){
            res.json(payload);
        }
    }catch (error) {
        res.status(401).send("Not Authorized")
    }
};

module.exports = {
    signUp,
    sighIn,
    verify,
};
