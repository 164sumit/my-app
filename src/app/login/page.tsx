import { useState } from 'react';
// import { signIn } from "../../auth"
import { signIn } from 'next-auth/react'
// import { signIn } from 'next-auth/react'
import credentials from 'next-auth/providers/credentials';
// import { connectToDB } from '@/lib/mongoose';
import { User } from '@/lib/models/user.model';
// import { redirect } from 'next/dist/server/api-utils';

const LoginForm: React.FC = () => {
 
  const loginaction=async(formdata:FormData)=>{
    "use server"
    console.log(formdata.get("email"));
    console.log(formdata.get("password"));
    const email=formdata.get("email");
    const password=formdata.get("password");
    // await connectToDB();
    // const user=await User.find();
    // signIn(credentials,)
    // console.log(user);
    await signIn('credentials', { email, password });
    // redirect('/')

    
  }

  return (
    <form action={loginaction}>
      <input
        type="email"
        name='email'
        
        placeholder="Email"
        required
      />
      <input
        type="password"
        name='password'
        
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
