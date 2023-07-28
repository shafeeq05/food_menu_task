import { Router } from "express"
import { adminControl } from "../Controller/adminController.js"
import { auth } from "../Middileware/jwtAuth.js"
import { foodControl } from "../Controller/foodmenu.js"


const router = Router()
//admin Login
router.get('/login',auth.user,adminControl.dashboard)
router.post('/login',adminControl.login)
router.post('/register',adminControl.user_signup)
router.post('/create-food-cate',foodControl.createFoodmenu)
router.post('/create-food-item',foodControl.getFoodMenu)
// router.put('/adminlogin',auth.admin,adminControl.login.put)

export default router