const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  surname:{
    type: String
  },
  email:{
    type:String
  },
  phonenumber:{
    type:String
  },
  password:{
    type:String
  },
}
,{timestamps: true})

mongoose.model("User",userSchema);