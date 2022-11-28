import { getCart } from "../controllers/carts.controllers.js";
import { Router } from "express";

const router = Router()

router.get('/cart', getCart)

export default router