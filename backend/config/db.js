import mongoose from "mongoose";

export const connectDb =async () => {
    mongoose.connect("mongodb+srv://mohammedumar447744:Rm2Tez86BQOdoiBu@cluster0.z20td.mongodb.net/food-del").then(()=>console.log("DB Connected"));
}