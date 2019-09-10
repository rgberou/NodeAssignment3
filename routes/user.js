const path=require('path');
const express=require('express');
const router=express.Router();

const rootDir=require('../helper/path');

const userData=require('./admin');


router.get('/',(req,res,next)=>{
    console.log(userData.username)
    user=userData.username
    res.render('user',{pageTitle:'Home', path:'/',user:user});
});

module.exports=router;