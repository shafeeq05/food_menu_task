import express from 'express'
import mongoose from 'mongoose'
import adminRouter from './Router/adminRoute.js';
import userRouter from './Router/userRouter.js'
import foodMenu from './Router/foodmenu.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json())

app.use('/',foodMenu)

app.use('/admin',adminRouter);

app.use('/user',userRouter)

mongoose.connect(process.env.MONGO_DB)
.then(()=>{
     app.listen(process.env.PORT,()=>{
        console.log("server startded");
    })
})
.catch((error)=>console.log('database connection faild'))
