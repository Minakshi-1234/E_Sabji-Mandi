import mongoose from "mongoose";

const connectDB=async ()=>{
     try {
          const conn = await  mongoose.connect('mongodb://127.0.0.1:27017/E_sbji_mandi') 
           console.log('Connected To mongodb Database')
     } catch (error) {
          console.log(`Error in Mongoose`)
     }
}

export default connectDB