import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'

//app configurations
const app=express();
const port = 4000


//middlewares
app.use(express.json());
app.use(cors());

//db connection
connectDb();

//api endpoint
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'));
app.use('/api/user',userRouter)



app.get("/",(req,res) => {
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`server started at the port ${port}`);
})

