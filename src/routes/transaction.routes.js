import { Router } from "express";
import { transactionValidation } from "../middlewares/transactionValidation.middleware";
import { purcharse } from "../controllers/transaction.controller";

const router = Router()


router.use(transactionValidation)

router.post('/purcharse', purcharse)


export default router