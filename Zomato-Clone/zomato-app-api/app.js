const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3001;
const MONGODB_URI =  'mongodb://127.0.0.1:27017/zomatoapi'; 
const APIRouter = require('./Routes/APIRouter');

// enable cors policy
app.use(cors());

// inject routing in our app
// we "use"  => method it's middleware 
// /api   /admin
mongoose.set('strictQuery', false);
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
