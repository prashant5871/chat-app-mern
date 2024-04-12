import mongoose from "mongoose"

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://prashantkalsariya210:j5VMpQOnqQTx1NPT@cluster0.iv37sxc.mongodb.net/").then(()=>{
        console.log("connected to mongoDB");
    }).catch((error)=>{
        console.log(error);
    })
}

export default connectDB;