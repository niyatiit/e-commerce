import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/user.route.js'
import productRoute from './routes/product.route.js'
import cartRouter from './routes/cart.route.js'


// App Config 
const app = express()
const port = process.env.PORT
connectDB()
connectCloudinary()

// middleware
app.use(express.json())
app.use(cors())


// Api Endpoints
app.use('/api/user' , userRouter)
app.use('/api/product',productRoute)
app.use('/api/cart',cartRouter)


app.get("/" ,(req,res)=>{
    res.send("API is working properly")
})


app.listen(port , ()=>{
    console.log(`Server running on port ${port}`)
})