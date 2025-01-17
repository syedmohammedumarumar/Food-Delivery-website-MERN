import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//login user logic
const loginUser = async(req,res) => {
    const {email,password} = req.body;

   try {
     //check wether the user wityh that  email is exist or not 
     const user = await userModel.findOne({email});
     if(!user){
         return res.json({success:false,message:"User dose not exist"})
     }
     
     //compare the password from user and pass form db using bcrypt.compare()
     const isMatch = await bcrypt.compare(password,user.password);
     //if there password did not match then invalid credentials
     if(!isMatch){
         return res.json({success:false, message:"Invalid details"})
     }
     
     //if every thing goes right then generate a token and send in response
     const token = createToken(user._id);
     res.json({success:true,token});

   } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
   }

}


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//register user logic
const registerUser = async(req,res) => {
    const {name,email,password} = req.body;
    try {
        
    //checking if the user is already exist 
    const exist = await userModel.findOne({email})
    if(exist){
        return res.json({success:false, message:"user already exists"})
    }

    //validating email
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"please enter a valid email"})
    }

    // checking the password length 
    if(password.length<8){
        return res.json({success:false, message:"please enter a strong password"})
    }

    //hashing the password and storing the user in db
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name:name,
        email:email,
        password:hashedPassword
    })

    const user = newUser.save()

    //now we want to create a token
    const token = createToken(user._id);
    res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }



}

export {loginUser,registerUser}