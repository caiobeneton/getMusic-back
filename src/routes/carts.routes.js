import { getCart, postCart } from "../controllers/carts.controllers.js";
import { Router } from "express";

const router = Router()

router.get('/cart', getCart)
router.post("/cart", postCart)

export default router