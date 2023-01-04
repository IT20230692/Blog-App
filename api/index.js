const express = require('express');
const app = express();
const dotenv =require("dotenv");
const mongoose = require("mongoose");



dotenv.config();
const PORT = process.env.PORT_NUM;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> {
    console.log(`DB Connected successfully`);
})
.catch((err) => console.log(`DB connection error`,err));


app.listen(PORT, ()=>{
    console.log(`Backend is running...  ${PORT}`);
});