const express = require("express");
const app = express();
const mongoose= require("mongoose");
const Course =require("./models/course.js");
const path =require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { courseSchema } = require("./schema.js")



const MONGO_URL="mongodb://127.0.0.1:27017/buyRyt"

main().then(() =>{
    console.log("connected to DB");
})
.catch((err) =>{
console.log(err)
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/buyRyt');
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/", (req,res) =>{
    res.send("Hi there");
;})


const validateCourse = (req, res, next) => {
    let { error } = courseSchema.validate(req.body);  
    
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg ); 
    }else{
        next();
    }
}

// Index Route
app.get("/courses", wrapAsync(async (req,res) =>{
    const allCourses = await Course.find({});
    res.render("courses/index.ejs",{allCourses});
}));


// New Route
app.get("/courses/new", (req,res) =>{
    res.render("courses/new.ejs");
})

// Show Route
app.get("/courses/:id", wrapAsync(async (req,res) =>{
    let {id} = req.params;
    const course = await Course.findById(id);
    res.render("courses/show.ejs",{course});
}))

// Create Route
app.post("/courses", validateCourse, wrapAsync(async (req,res) =>{
    // let{title,description,image,price,country,location} = req.body;       course[title] -> course ko object bna denge
    // let result = courseSchema.validate(req.body);
    // console.log(result);
    
    // if(result.error){
    //     throw new ExpressError(400, result.error ); 
    // }
        const newCourse=new Course(req.body.course);
        await newCourse.save();
        res.redirect("/courses");
}));


// Edit Route
app.get("/courses/:id/edit", wrapAsync(async(req,res) =>{
    let {id} = req.params;
    const course = await Course.findById(id);
    res.render("courses/edit.ejs",{course});
}))


// Update Route
app.put("/courses/:id", validateCourse ,wrapAsync(async (req,res) =>{
    
    let {id} =req.params;
    await Course.findByIdAndUpdate(id,{...req.body.course}); // deconstruct kar rhe key-val pair me
    res.redirect(`/courses/${id}`);
}));


// // Delete Route
app.delete("/courses/:id", wrapAsync(async (req,res) =>{
    let{id} =req.params;
    let deletedCourse= await Course.findByIdAndDelete(id);   //jab findByIdAndDelete will trigger findOneAndDelete
    console.log(deletedCourse);                                // which will eventually trigger "mongoose middleware (post)" to perform some task
    res.redirect("/courses");
}));


app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
})
app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went wrong"} = err;         
    res.status(statusCode).render("error.ejs" ,{ message });
 
}); 
app.listen(8080, () =>{
    console.log("server is listening to port 8080");
})