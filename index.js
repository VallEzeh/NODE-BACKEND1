import e from "express";
import path from 'path';
import { fileURLToPath } from "url";
import mongoose from 'mongoose';
// import Post from "./models/post.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import comRoutes from "./routes/comRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
config()
// import { del1User, forSignup, get1user, getAllUsers, update1User } from "./controller/userController.js";
// import { createPost, del1Post, get1post, getAllPosts, update1Post,} from "./controller/postController.js";
// const express = require('express');
// const path = require('path');
const app = e();
const port = process.env.PORT || 3500 ;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); ``
const MONGODB_URL = process.env.MONGODB_URL



mongoose.connect(MONGODB_URL)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err))
    app.use(cookieParser());




app.use(e.json());
app.use(e.urlencoded({extended:true}))

app.use(e.static('./box'))

app.use(cors({
    origin: ['http://localhost:5173' ,"https://con-react-vallezehs-projects.vercel.app"],
    credentials: true,
})) 

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'box','index.html'))
})

app.use('/user', userRoutes)

app.use('/post', postRoutes)

app.use('/comment', comRoutes)




// app.post('/create',(req,res)=>{
//     let {firstname,lastname,email,password} = req.body

//     let myTable = `
        
//     <table border="1">
//         <thead>
//             <tr>
//                 <th>FirstName</th>
//                 <th>LastName</th>
//                 <th>Email</th>
//                 <th>Password</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>${firstname}</td>
//                 <td>${lastname}</td>
//                 <td>${email}</td>
//                 <td>${password}</td>
//             </tr>
//         </tbody>
//     </table>
//     `

//     res.send(myTable)
// })

// app.post('/create',(req,res)=>{
//     let myTable = `
        
//     <table border="1">
//         <thead>
//             <tr>
//                 <th>FirstName</th>
//                 <th>LastName</th>
//                 <th>Email</th>
//                 <th>Password</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>${req.body.firstname}</td>
//                 <td>${req.body.lastname}</td>
//                 <td>${req.body.email}</td>
//                 <td>${req.body.password}</td>
//             </tr>
//         </tbody>
//     </table>
//     `

//     res.send(myTable)
// })


// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'box','about.html'))
// })


app.listen(port,()=>{
    console.log(`server is runninng on port : ${port}`)
    // console.log("server is running on port " + port)
})
