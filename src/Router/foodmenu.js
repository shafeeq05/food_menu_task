import { Router } from "express"
import { dashboard } from "../Controller/dashboard.js" 



const router = Router()
//admin Login
router.get('/food',dashboard.food)

export default router