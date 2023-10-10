import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors  from "cors";
import dotenv from 'dotenv';
import categoryRoute from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js" 

dotenv.config();
console.log(process.env.PORT)
//rest object

const app= express();
//database config()

connectDB();

//middelware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product",productRoutes)

//rest api

app.get('/',(req,res)=>{
    res.send("<h1> welcome to e-sbji_mandi</h1>")
})
 
const PORT=process.env.PORT;


//run listen

app.listen(PORT,()=>{
    console.log(`server Running ${PORT}`)
})
