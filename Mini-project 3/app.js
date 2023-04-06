const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3005;
const MONGODB_URI =  'mongodb://127.0.0.1:27017/videostreamapi'; 
const APIRouter = require('./routes/APIRouter');

// inject routing in our app
// we "use"  => method it's middleware 
// /api   /admin

app.use(express.json()); // json request
app.use(express.urlencoded({ extended: false }));
app.use("/api", APIRouter);

console.log("Connecting to db");
mongoose.connect(MONGODB_URI).then(()=> {
    app.listen(PORT, ()=> {
        console.log("Connected with db");
        console.log("Project is runing on", PORT);
    });
})
.catch((error)=>{
    console.log(error);
});