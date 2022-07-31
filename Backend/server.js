const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')

//IMPORTS FROM THE OTHER FILES (FOLDERS)
require('./app/models/user.model')
// const db = require('./app/models/server');
const db = require('./app/config/db.config')
const users = require('./app/routes/users.route')
const corsOptions ={

    origin: "http://localhost:8081"
}


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
//Connecting mangoDB 
mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Yey!! The route end point works!!." });
  });

app.use('/api',users);

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});