const express=require('express');
const path=require('path');
const http=require('http');
const bodyParser=require('body-parser');


const app=express();

//Adding ejs
app.set('view engine','ejs');
app.set('views','views');




app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


const userRoutes=require('./routes/user');
const adminRoutes=require('./routes/admin');

app.use('/',userRoutes);
app.use('/admin',adminRoutes.routes);




app.listen(8080)