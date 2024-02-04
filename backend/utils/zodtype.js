import zod from 'zod';

const createProduct = zod.object({
    name: zod.string(),
    price: zod.number(),
    description: zod.string(),
    image: zod.string(),
    discountPercentage: zod.number(),
    stock: zod.number(),
    brand: zod.string(),
    category: zod.string(),
})

export { createProduct }