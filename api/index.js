const express = require('express');
const path = require("path");
const cors = require("cors");

const mongoose = require('mongoose');
// Initialize Database
const atlas_URI = "mongodb+srv://pushpendra:cnWJcTaF9sIfiPQo@cluster0.q6ec2.mongodb.net/local_library?retryWrites=true&w=majority";

mongoose.connect(atlas_URI,{useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error',()=>{
    console.error("Error in connecting to the database.")
});


// Require word Router
const wordRouter = require("./routes/word");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/',wordRouter);

module.exports = app;

const port =  process.env.PORT || 8080;

app.listen(port, () => console.log(`Visit http://localhost/ to see the application.`));
