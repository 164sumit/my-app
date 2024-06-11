import User from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function loginuser(formdata:FormData) {
    try {
      connectToDB();
      try {
        const user=await User.findOne({email:email});
        if(!user){
          
        }
      } catch (error) {
        
      }
  
      
  }