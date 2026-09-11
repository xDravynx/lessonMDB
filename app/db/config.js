const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL)
        
        console.log(`Connected to MongoDB successfully ${(await conn).connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;