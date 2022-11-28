import { Router } from "express";
import { transactionValidation } from "../middlewares/transactionValidation.middleware.js";
import { purcharse } from "../controllers/transaction.controller.js";

const router = Router()


router.post('/purcharse', transactionValidation, purcharse)


export default router