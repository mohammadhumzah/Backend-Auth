import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"
import cookieParser from "cookie-parser"

//Importing all routes

import userRoutes from "./routes/user_routes.js"  //used default keyword so was able to rename routes to userRoutes


const app = express()
const port = process.env.PORT || 4000  //.env m likha huwa port use krlo agar available ni to 3000 krlo

app.use(express.json())  // request.body ko JSON se padhne ke liye zaroori hai

app.use(cors({
    origin: process.env.BASE_URL,
    allowedHeaders: ['Content-Type'],
    methods: ['GET', 'POST']
}))

app.use(cookieParser())   // for accessing user cookies after he logged in


// Connect app to db
db()

//user routes

app.use("/api/v1/users/", userRoutes)


app.listen(port, () => {            // poore computer p get request nahi sunnegay
  console.log(`Example app listening on port ${port}`)
})


