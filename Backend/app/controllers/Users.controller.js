const mongoose = require('mongoose');
const User = require('../models/user.model')

// Create and Save a new user
exports.create = async (req, res) => {
  if (!req.body.email && !req.body.name && !req.body.surname && !req.body.phonenumber && !req.body.password)
  {
    res.status(400).send({ message: "fields can not be empty!" });
  }

  const user = new User({
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname,
        phonenumber: req.body.phone,
        password: req.body.password
  });

   // Save user in the database
  await user.save()
  .then(data => {
    res.send({
      message:"User created successfully!!",
      user:data
     });
  }).catch(err => {
  res.status(500).send({
      message: err.message || "Some error occurred while creating user"
  });
});
    
     
    
};
// Retrieve all users from the database.
exports.findAll = async (req, res) => {
  try {
      const user = await User.find();
      res.status(200).json(user);
  } catch(error) {
      res.status(404).json({message: error.message});
  }
};
// Find a single user with an id
exports.findOne =  async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
 } catch(error) {
    res.status(404).json({ message: error.message});
}
};
// Update a user by the id in the request
exports.update = async (req, res) => {
  if(!req.body) {
    res.status(400).send({
        message: "Data to update can not be empty!"
    });
}

const id = req.params.id;

await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
    if (!data) {
        res.status(404).send({
            message: `User not found.`
        });
    }else{
        res.send({ message: "User updated successfully." })
    }
}).catch(err => {
    res.status(500).send({
        message: err.message
    });
});
};
// Delete a user with the specified id in the request
exports.delete = async (req, res) => {
  await User.findByIdAndRemove(req.params.id).then(data => {
    if (!data) {
      res.status(404).send({
        message: `User not found.`
      });
    } else {
      res.send({
        message: "User deleted successfully!"
      });
    }
}).catch(err => {
    res.status(500).send({
      message: err.message
    });
});
};
