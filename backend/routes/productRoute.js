import express from 'express';
import { addProduct } from '../controller/productController.js';
const router = express.Router();


router.route('/addProduct').post(addProduct)

export default router