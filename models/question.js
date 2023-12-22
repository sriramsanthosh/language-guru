const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    level:{
        type: String,
        required: true,
    },
    question:{
        type: String,
        required: true,
    },
    option1 : {
        type : String,
        required : true
    },
    option2 :{
        type : String,
        required: true
    },
    option3 :{
        type:String,
        required: true
    },
    answer:{
        type:String,
        required: true
    },
    explanation:{
        type: String
    },
    author:{
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;