const express = require("express");
const User = require("../models/user");

// Create New Account Page
module.exports.home = function(req, res){
    let userid = req.cookies.userid;
    if(userid){
        loginThroughCookies(req, res, userid);
    }
    else{
        return res.render('home');
    }
}

// Login to Existing Account
module.exports.login = function (req, res) { 
    let userid = req.cookies.userid;
    if(userid){
        loginThroughCookies(req, res, userid);
    }
    else{
        return res.render('login');
    }
}

// Redirecting to Dashboard Page
module.exports.createAccount = function (req, res) {  
    if(req.body.conf_password){
        checkForPassword(req);
        User.findOne({email: req.body.email}).then((user)=>{
            if(!user){
                User.create(req.body).then((newuser)=>{
                    console.log("User Created");
                    res.cookie("userid", newuser.id);
                    return res.render('dashboard', {
                        user:newuser
                    });
                }).catch((err)=>{
                    console.log(`Error ${err} in finding the user in signing up`);
                    return res.redirect('back');
                });
            }else if(user){
                console.log("User already exists!");
                return res.render("user-sign-in");
            }
        }).catch((err)=>{
            console.log(`Error ${err} in creating in the user`);
            return res.redirect('back');
        });
    }    
    User.findOne({email: req.body.email}).then((user)=>{
        if(user){
            console.log("User Login successful!!");
            res.cookie("userid", user.id);
            return res.render('dashboard', {
                user: user
            });
        }
        console.log("Wrong Password / User doesn't exist!!");
        return res.redirect('back');
    }).catch((err)=>{
        console.log(`Error ${err} in signing in the user`);
        return res.redirect('back');
    });
}





// =========================== Functions ============================

// Logging to User Dashboard using cookie
function loginThroughCookies(req, res, userid){
    if(userid){
        User.findOne({_id:userid}).then((user)=>{
            console.log(user);
            console.log("User Login successful!!");
            if(user){
                return res.render('dashboard', {
                    user: user
                });
            }
            else{
                return res.render('login');
            }
        }).catch((err)=>{
            console.log(`Error ${err} in signing in the user through cookie`);
        });
    }
}

// Check for confirm Password while creating the user account
function checkForPassword(req, res){
    if(req.body.password != req.body.conf_password){
        console.log("The password doesn't match with confirm password. Please try again!!");
        return res.redirect('back');
    }
}