import { Router } from "express"
import { adminControl } from "../Controller/adminController.js"
import { auth } from "../Middileware/jwtAuth.js"


const router = Router()
//admin Login
router.get('/login',auth.admin,adminControl.dashboard)
router.post('/login',adminControl.login)
router.post('/register',adminControl.admin_signup)
router.put('/edit-profile',auth.admin,adminControl.setAdmin)
router.delete('/delete-profile',auth.admin,adminControl.deleteAccount)

// router.put('/adminlogin',auth.admin,adminControl.login.put)

export default router