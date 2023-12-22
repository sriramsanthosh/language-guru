const mongoose = require("mongoose");

const uri = "mongodb+srv://isrs444:XBg3C1rK5PzkMuOK@cluster0.d2fvlsa.mongodb.net/?retryWrites=true&w=majority";

const db = async() => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection.once("open" , async() => {
    console.log("Connected to mongo");
  });

  mongoose.connection.on("error" , async(err) => {
    console.log("Error connecting" , err);
  })
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = db;

// // (up and running) then print the message 
// db.once('open', function(){
//     console.log("Connected to database :: MongoDB");
// })