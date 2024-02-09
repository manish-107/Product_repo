import asyncHandler from "../middleware/asyncHandler.js";
import { productModel } from "../models/productModel.js";
import { createProduct } from "../utils/zodtype.js";

const addProduct = asyncHandler(async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createProduct.safeParse(createPayload);

    if (!parsedPayload.success) {
        console.log(parsedPayload.error);
        return res.status(411).json({ msg: "wrong input field" }); // Added return statement
    }

    console.log(parsedPayload);
    try {
        let result = await productModel.create({
            name: parsedPayload.data.name, // Access 'data' property to get the parsed object
            price: parsedPayload.data.price,
            description: parsedPayload.data.description,
            image: parsedPayload.data.image,
            discountPercentage: parsedPayload.data.discountPercentage,
            stock: parsedPayload.data.stock,
            brand: parsedPayload.data.brand,
            category: parsedPayload.data.category,
        });
        console.log(result)
        res.json({ msg: "done" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
});


const getAllProduct = asyncHandler(async (req, res) => {
    const users = await productModel.find({});
    setTimeout(() => {
        res.json({ users })

    }, 1000);
})

export { addProduct, getAllProduct }; 
