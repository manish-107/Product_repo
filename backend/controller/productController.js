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

const paginationProduct = asyncHandler(async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // default page 1 if not provided 
        const limit = 8;
        const startIndex = (page - 1) * limit;

        // Retrieve total count of products
        const totalCount = await productModel.countDocuments();

        // Retrieve paginated products
        const products = await productModel.find().limit(limit).skip(startIndex);

        const response = {
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
            totalItems: totalCount,
            products: products.map(product => ({
                // Include only the properties you need from the product object
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                image: product.image,
                discountPercentage: product.discountPercentage,
                stock: product.stock,
                brand: product.brand,
                category: product.category,
            }))
        };

        res.status(200).json(response);
    } catch (error) {
        console.error('Error in paginationProduct:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


export { addProduct, getAllProduct, paginationProduct }; 
