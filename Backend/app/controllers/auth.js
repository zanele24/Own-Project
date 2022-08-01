const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/auth.config');
const User = require('../models/users');

exports.signup =  (req, res) => {
    const { name, surname, email, phonenumber, password } = req.body
    if (!email || !password || !name || !surname || !phonenumber)
    {
        return res.status(422).json({error:"please add all the fields"})
    }

    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "user already exists with that email" })
            }
            bycrypt.hash(password,12)
            .then(hashedpassword =>
            {const user = new User({
                name,
                surname,
                email,
                phonenumber,
                password:hashedpassword

            })
             user.save()
                .then(data => {
                    res.status(200).json({ message: "User registered successfully!!"});
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while registering user"
                });
             }) 
            
        })
    });  
 }
exports.signin = (req,res) =>{
    const {email,password} = req.body
    if (!email || !password)
    {
        return res.status(422).json({error:"please add email and password"})
    }

    User.findOne({email:email})
    .then(savedUser =>
        {
            if (!savedUser)
            {
                return res.status(422).json({error:"Invalid Email or password"})
            }
            bycrypt.compare(password,savedUser.password)
            .then(doMatch =>
                {
                    if (doMatch)
                    {
                        res.status(200).json({message: "User signed in successfully"})
                    }
                    else
                    {
                        return res.status(422).json({error:"Invalid Email or password"})
                    }
               
                })

                .catch(error =>{
                    console.log(error)
                })
        })

}

exports.signout =  (req, res) => {
    req.session = null;

    return res.status(200).send({ message: "You've been signed out!" });
 
};
