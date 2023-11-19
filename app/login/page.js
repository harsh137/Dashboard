"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {toast} from "react-hot-toast"
import Navbar from '@/components/Navbar';
const LoginPage = () => {
    const router=useRouter()
    
    const [user,setUser]=useState({
      email:'',
      password:''
    })
    const [loading,setLoading]=useState(false)

    const handleLogin =  async (e) => {
      e.preventDefault();
      if(!user.email||!user.password){
        alert("Enter All The filds")
      }
        
        if (!validateEmail()) {
            alert('Invalid email address');
            return;
        }
        
        try {
          setLoading(true);
          const response=await axios.post('/api/users/login',user);
          toast.success("Login success")
          // console.log("Login Success",response.data);
          router.push("/dashboard")
          
        } catch (error) {
          console.log("Login Failed",error.message);
          // toast.error(error.message);
          alert(error.message)
        }finally{
          setLoading(false);
        }
        
    };

    const handleRegister=()=>{
        router.push('/signup')
    };

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(user.email);
    };

    return (
       
        <div className="max-h-screen">
          <Navbar/>
  <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
    <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div className="md:w-1/2 px-5">
        <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
        <p className="text-sm mt-4 text-[#002D74]">If you have an account, please login</p>
        <div>
          {
             loading ? <div className="text-green-500">Loading...</div>:

          
        <form className="mt-6"  method="POST">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input type="email" name="" id="" placeholder="Enter Email Address" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} className=" text-black w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="true" required/>
          </div>
  
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" name="" id="" placeholder="Enter Password" minLength="6" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} className="  text-black  w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required />
          </div>
  
          <div className="text-right mt-2">
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
  
          <button type="submit" onClick={handleLogin} className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Log In</button>
        </form>
        } 
        </div>

        <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-500" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-500" />
        </div>

        

        <div className="text-sm flex justify-between items-center mt-3">
          <p className='text-[#002D74]'  >If you don't have an account...</p>
          <button onClick={handleRegister} className= "  text-black  py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Register</button>
        </div>
      </div>

      <div className="w-1/2 md:block hidden ">
        <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" className="rounded-2xl" alt="page img"/>
      </div>

    </div>
  </section>
  </div>
    );
};

export default LoginPage;
