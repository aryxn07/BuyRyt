const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
title:{
    type:String,
    required: true
},
description: String,
    image: {
        type: String,
        default:"https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v
    },
    price: Number,
    author: String,
    rating: Number,
    language:String
})

const Course = mongoose.model("Course",courseSchema);
module.exports=Course;