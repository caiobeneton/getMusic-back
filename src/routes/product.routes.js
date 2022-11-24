import { Router } from "express";
import { insertProductValidation } from "../middlewares/insertProductValidation.middleware.js";
import { insertNewProduct } from "../controllers/products.controllers.js";

const router = Router()
router.use(insertProductValidation)

router('/products', insertNewProduct)