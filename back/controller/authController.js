const Auth = require('../model/authModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signUp = async (req,res) => {

    try{
    const {name,email,pass} = req.body;

    const found = await Auth.find({email});

    if(found.length > 0) {
        return res.status(400).json({message: "Email already exists"});
    }

    const hashed = await bcrypt.hash(pass,10);

    const User = await Auth.create({name,email,pass:hashed});

    res.status(201).json({User});

    console.log("Signup successfull");
   
    

}catch(error){
    res.status(500).json({message:error.message});
}

}

module.exports = signUp;


const Login = async (req, res) => {

    try{
        const {email, pass} = req.body;

        const user = await Auth.findOne({email});

        if(!user) {
            return res.status(400).json({message: "User not found"});
        }

        const match = await bcrypt.compare(pass, user.pass);

        if(!match) {
            return res.status(400).json({message: "Password incorrect"});
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '7d'}
        );

        res.status(200).json({
            message: "Login successful",
            token: token
        });

        console.log("Login successful");

    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = Login;