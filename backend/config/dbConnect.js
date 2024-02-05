import mongoose from "mongoose"
const mongoUrl = 'mongodb://127.0.0.1:27017/product_repo';


const dbConnect = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("db connected..")
    } catch (err) {
        console.log(err.message)
    }
}

export { dbConnect }
