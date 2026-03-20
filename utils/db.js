import mongoose from "mongoose"; 
import dotenev from "dotenv"
dotenev.config() 

const db = () => {

    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to mongoDB")
    })
    .catch((err) => {
        console.log("Failed connecting to mongoDB")
    })
}

export default db