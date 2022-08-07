const mongoose = require('mongoose');
const Product = require('../models/products')

//ADD PRODUCT AND SAVE
exports.create = async (req, res) => {
  if (!req.body.productName && !req.body.productDesc && !req.body.Price && !req.body.Liter && !req.body.Unit)
  {
    res.status(400).json({ message: "fields can not be empty!" });
  }

  const product = new Product({
        productName: req.body.productName,
        productDesc: req.body.productDesc,
        Price: req.body.Price,
        Liter:req.body.Liter,
        Unit: req.body.Unit,
  });

   // ADD PRODUCT TO THE DATABASE
  await product.save()
  .then(data => {
    res.status(200).json({
      message:"Products are addded successfully!!",
      product:data
     });
  }).catch(err => {
  res.status(500).json({
      message: err.message || "Some error occurred while creating user"
  });
});
    
     
    
};
// FIND ALL PRODUCTS FROM THE DATABASE
exports.findAll = async (req, res) => {
  try {
      const product = await Product.find();
      res.status(200).json(product);
  } catch(error) {
      res.status(404).json({message: error.message});
  }
};
// FIND PRODUCT BY ID
exports.findOne =  async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
 } catch(error) {
    res.status(404).json({ message: error.message});
}
};
// UPDATE PRODUCT BY ID
exports.update = async (req, res) => {
  if(!req.body) {
    res.status(400).json({
        message: "Data to update can not be empty!"
    });
}

const id = req.params.id;

await Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
    if (!data) {
        res.status(404).json({
            message: `Product not found.`
        });
    }else{
        res.status (200).json({ message: `Product ${id} was updated successfully.` })
    }
}).catch(err => {
    res.status(500).json({
        message: err.message
    });
});
};
// DELETE PRODUCT BY ID ON REQUEST
exports.delete = async (req, res) => {
  await Product.findByIdAndRemove(req.params.id).then(data => {
    if (!data) {
      res.status(404).json({
        message: `Product not found.`
      });
    } else {
      res.status(200).json({
        message: `Product ${id} deleted successfully!`
      });
    }
}).catch(err => {
    res.status(500).json({
      message: err.message
    });
});
};
