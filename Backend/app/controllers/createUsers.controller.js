const mongoose = require('mongoose');
const {User} = require('../models/user.model')

// Create and Save a new user
exports.create = (req, res) => {
  const {name, surname,email,phonenumber,password} = req.body

  User.findOne({email:email})
  .then((savedUser) => {
    if (savedUser)
    {
      return res.status(500).json({error: "User already exists with that email"})
    }
    const user = new User({
      name,surname,email,phonenumber,password
    })
      // Save Tutorial in the database
    user.save()
    .then(user =>{
      res.json({message:"User successfully added"})
    })
    .catch(err => {
      res.status(500).send({
          error: "Some error occurred while adding a user ."
      });
    });
    
  })
    
};
// Retrieve all users from the database.
exports.findAll = (req, res) => {
  
};
// Find a single user with an id
exports.findOne = (req, res) => {
  
};
// Update a user by the id in the request
exports.update = (req, res) => {
  
};
// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all user from the database.
exports.deleteAll = (req, res) => {
  
};