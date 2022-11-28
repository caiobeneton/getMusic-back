import { getCart } from "../controllers/carts.controllers";
import { Router } from "express";

const router = Router()

router.get('/cart', getCart)

export default router