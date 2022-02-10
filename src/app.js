const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
dotenv.config({path:'./config.env'});
//const db = 'mongodb+srv://sanjoy:Sanjoy%401@cluster0.knkkg.mongodb.net/mernstack?retryWrites=true&w=majority';
//const db = process.env.DATABASE;
const PORT = process.env.PORT;
require('../db/conn');
app.use(express.json());
app.use(require('../router/auth'));

const User = require('../models/userShcema');
// mongoose.connect(db, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 

// }).then(()=>{
//     console.log('connection db success');
// }).catch((e)=>console.log(e));

//middlewarw
const middleware=(req, res, next)=>{
    console.log("hello middleware");
    next();
}




// app.get('/', (req, res)=>{
    
//      res.send("Hello world from the server");
// });
app.get('/about', middleware, (req, res)=>{
    
    res.send("Hello about world from the server");
});
app.get('/contact', (req, res)=>{
    
    res.send("Hello contact world from the server");
});
app.get('/signin', (req, res)=>{
    
    res.send("Hello signin world from the server");
});
app.get('/signup', (req, res)=>{
    
    res.send("Hello signup world from the server");
});
app.listen(PORT,()=>{
    console.log("server is running");
})