import userScheema from '../Model/userScheema.js';
import jwt from 'jsonwebtoken'

export const auth = {
    admin : async(req,res,next)=>{
        try {
        const userId = jwt.verify(req.headers.token,"shafeeq").admin_id;
        const user = await userScheema.findById(userId);
        if(user){
            req.middileUser = user.id
            console.log(req.middileUser);
            next()
        }else{
            res.status(401).json({msg:'invalid credentials'})
        }
        
        } catch (error) {
            res.status(404).json({msg:"unautherised user"}) 
        }
    },
    user : async(req,res,next)=>{
        try {
        const userId = jwt.verify(req.headers.token,"shafeeq").user_id;
        const user = await userScheema.findById(userId);
        if(user){
            req.middileUser = user.id
            console.log(req.middileUser);
            next()
        }else{
            res.status(401).json({msg:'invalid credentials'})
        }
        
        } catch (error) {
         res.status(404).json({msg:"unautherised user"})   
        }
    }
}