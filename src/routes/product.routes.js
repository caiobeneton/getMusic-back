import { Router } from "express";
import { insertProductValidation } from "../middlewares/insertProductValidation.middleware.js";
import { getProducts, insertNewProduct } from "../controllers/products.controllers.js";

const router = Router()

router.post('/products', insertProductValidation, insertNewProduct)

router.get('/products', getProducts)

export default router
