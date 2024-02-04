import mongoose from "mongoose"
const mongoUrl = 'mongodb://127.0.0.1:27017';


const dbConnect = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("db connected..")
    } catch (error) {
        console.log(error.message)
    }
}

export { dbConnect }
