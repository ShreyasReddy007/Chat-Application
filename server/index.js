const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();
require("dotenv").config();

app.use(cors(
    {
        origin : process.env.CLIENT_URL,
        credentials : true
    }
));
app.use(express.json());

app.use("/api/auth",userRoutes)

mongoose.connect(process.env.MONGO_URL,{
    // useNewUrlParser : true,
    // useUnifiedTopology : true,
});

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Started on Port ${process.env.PORT}` );
});