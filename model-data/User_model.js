import mongoose from "mongoose";  
import bcrypt from "bcryptjs";    

// Defining schema of db
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default:"user"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken:{
        type: String,
    },
    resetPasswordToken:{
        type: String,
    },
    resetPasswordexpiry:{
        type: Date,
    }
}, {
    timestamps: true,
})

// Hook for password hashing
userSchema.pre("save", async function() {            // dont use arrow fxns

    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10)
    }    
})



// Putting that schema into mongoDB, and storing its reference in a variable
const User = mongoose.model("User", userSchema)        // (kis-p-banau,kis-ki-base-p-banau)

export default User 