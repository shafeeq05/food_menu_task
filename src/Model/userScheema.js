// const mongoose = require('mongoose')
import mongoose from "mongoose"

const scheema = new mongoose.Schema({
    name:{
        type:String,
        
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true

    },
    email:{
        type:String,
        unique:true,
        required:true
    }
})

const userScheema = mongoose.model("user",scheema)
export default userScheema