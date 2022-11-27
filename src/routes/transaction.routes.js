import { Router } from "express";
import { transactionValidation } from "../middlewares/transactionValidation.middleware.js";
import { purcharse } from "../controllers/transaction.controller.js";

const router = Router()


router.use(transactionValidation)

router.post('/purcharse', purcharse)


export default router