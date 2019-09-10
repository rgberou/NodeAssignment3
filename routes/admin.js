const path=require('path');
const express=require('express');
const router=express.Router();

const rootDir=require('../helper/path');


const username=[];
router.get('/add-user',(req,res,next)=>{
    res.render('admin',{pageTitle:'Add User',path:'/admin/add-User'});
})

router.post('/add-user',(req,res,next)=>{
    console.log('username '+req.body.userName);
    username.push({username:req.body.userName});
    res.redirect('/');
})

//module.exports=router;

module.exports.routes=router;
module.exports.username=username;