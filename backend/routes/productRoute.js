import express from 'express';
import { addProduct, getAllProduct, paginationProduct } from '../controller/productController.js';
const router = express.Router();


router.route('/addProduct').post(addProduct)
router.route('/products').get(getAllProduct)
router.route('/products/page').get(paginationProduct);

export default router