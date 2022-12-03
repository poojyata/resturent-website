const mongoose = require('mongoose');
//Config start 
// var config = require("./config.json");
const MONGO_URI = process.env.MONGO_URI



mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const connectDB = mongoose.connection;


// these message will come if sever is connected
connectDB.on("error", (error) => console.log(error));
connectDB.once("open", () => console.log("data connected"));

module.exports = connectDB;