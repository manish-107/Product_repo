import express from 'express';
import { addProduct, getAllProduct } from '../controller/productController.js';
const router = express.Router();


router.route('/addProduct').post(addProduct)
router.route('/products').get(getAllProduct)

export default router