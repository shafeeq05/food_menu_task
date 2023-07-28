import userScheema from "../Model/userScheema.js";
import bcript from 'bcrypt'
import jwt from 'jsonwebtoken'

const salt = process.env.SALT
export const adminControl = {
  dashboard: async (req, res) => {
    try {
      const allUser = await userScheema.find()
      return res.status(200).json({message:"all users",data:allUser})

    } catch (error) {
      console.log(error);
      return res.status(500).json({message:'internal error'})
    }
  },
  setAdmin:async (req,res)=>{
    try {
      const {email} = req.body
    const setAdmin = await userScheema.findOneAndUpdate({email},{isAdmin:true}).exec()
    return res.status(200).json({message:" updated successfully",data:setAdmin})
    } catch (error) {
      console.log(error);
      return res.status(200).json({message:"internal error "}) 
    }
  },
  deleteAccount:async (req,res)=>{
   try {
    console.log(req.middileUser);
    const user = await userScheema.findByIdAndDelete(req.middileUser)
    console.log(user);
    if(user){
      return res.status(200).json({message:'deleted successfully',data:user})
    }else{
      return res.status(404).json({message:'user not found',})
    }
   } catch (error) {
    return res.status(500).json({message:'internal error'})
   }

  },

  
  login: async (req, res) => {
    try {
      console.log(process.env.JWT_KEY_ADMIN);
      const { email, password } = req.body;
      console.log(email,password);
      const admin_exist = await userScheema.findOne({
        email
      });
        // console.log(admin_exist);
      if (admin_exist) {
        const decriPassword = await bcript.compare(password, admin_exist.password)
        if(decriPassword){
          if(admin_exist.isAdmin){
            const token = jwt.sign({admin_id:admin_exist.id},process.env.JWT_KEY_ADMIN,)
            
        return res.status(200).json({ message: "sucsess",token:token });
        }else{
          const token = jwt.sign({user_id:admin_exist.id},process.env.JWT_KEY_USER,)
          return res.status(200).json({ message: "sucsess",token:token });
        }
      } 
    }
    else {
      console.log("user not found");
      return res.status(404).json({ message: "Password not match" });
    }

    } catch (error) {
      console.log(error);
      return  res.status(500).json({message:'internal error'})
    }
  },
  admin_signup:async(req,res)=>{
    try {
      console.log(salt);
      const {name,email,password} =req.body
      const encPassword = await bcript.hash(password,10);
    const newUser  = new userScheema ({
      name,
      email,
      password:encPassword,
      isAdmin:true
    })
    newUser.save()
    return res.status(200).json({message:"admin account created"})
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"internal error"})
    }

  },
  user_signup:async(req,res)=>{
    try {
      const {name,email,password} =req.body
      const encPassword = await bcript.hash(password,10);
    const newUser  = new userScheema ({
      name,
      email,
      password:encPassword,
      isAdmin:false
    })
    newUser.save()
    console.log(newUser);
    return res.status(200).json({message:"user useraccount created"})
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"error"})
    }

  }
};
// const newAdmin = new adminScheema({
//     name: 'John Doe',
//     password: 'password123',
//     email: 'john.doe@example.com',
//     isAdmin:true
//   });
//   newAdmin.save()
