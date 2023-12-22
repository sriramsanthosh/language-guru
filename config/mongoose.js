const mongoose = require("mongoose");

const uri = "mongodb+srv://isrs444:XBg3C1rK5PzkMuOK@cluster0.d2fvlsa.mongodb.net/?retryWrites=true&w=majority";
// const uri = "mongodb://localhost:27017";

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

const db = mongoose.connection;

// (up and running) then print the message 
db.once('open', function(){
    console.log("Connected to database :: MongoDB");
});