"use client"
import Link from "next/link";
import axios  from "axios";
import { useState ,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from "react-hot-toast";
import Navbar from '@/components/Navbar';
const SignupPage = () => {
    const router=useRouter()
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [phone, setPhone] = useState('');
    // const [Cpassword,setCPassword]=useState('');
    const [user,setUser]=useState({
      email:'',
      password:'',
      Cpassword:'',
      phone:'',

    })
    const [loading,setLoading]=useState(false);
    
    
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };
    // const handlePhoneChange = (e) => {
    //     setPhone(e.target.value);
    // };
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };
    // const handleCPasswordChange = (e) => {
    //     setCPassword(e.target.value);
    // };
   

    const handleSignup = async (e) => {
      
        e.preventDefault();
        // setusers()
       
        
        if(!user.email || !user.password ||!user.phone|| !user.Cpassword || !user.password){
          alert("Fill All The Fild's");
          return;
        }
        if (!validateEmail(user.email)) {
            alert('Invalid email address');
            return;
        }
        if(user.password!==user.Cpassword){
            alert('Password and Confirm Password does not match')
            return;
            
        }
        
       
        try {
          setLoading(true);
          
          const response= await axios.post("/api/users/signup",user);

          console.log("singUp Success",response.data);
          router.push("/login")

          
        }catch (error) {
        
          console.log("SignUp failed ", error.message)
          // toast.error(error.message)
          alert(error)
        }finally{
          setUser({
            email:'',
            password:'',
            phone:'',
          })
          setLoading(false)
          
        }
    };
    const handleAlready=()=>{
        router.push('/login') 
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };


return (
<div className="max-h-screen">
<Navbar/>
  <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
    <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div className="md:w-1/2 px-5">
        <h2 className="text-2xl font-bold text-[#002D74]">Register</h2>
        <p className="text-sm mt-4 text-[#002D74]">Create Account</p>
        <div>
          {
            loading ? <div className="text-green-500">Loading...</div>:
          
        <form className="mt-4"  method="POST">
          <div className="mt-2">
            {/* <label className="block text-gray-700">Email Address</label> */}
            <input type="email" name="email" id="email" placeholder="Enter Email Address" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} className=" text-black w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus required/>
          </div>

          <div className="mt-2">
            {/* <label className="block text-gray-700">Phone Number</label> */}
            <input type="tel" name="phone" id="phone" placeholder="Enter Phone Number" value={user.phone} onChange={(e)=>setUser({...user,phone:e.target.value})} className=" text-black w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus  required/>
          </div>
  
          <div className="mt-2">
            {/* <label className="block text-gray-700">Password</label> */}
            <input type="password" name="password" id="password" placeholder="Enter Password" minLength="6" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} className="  text-black  w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required />
          </div>
          <div className="mt-2">
            {/* <label className="block text-gray-700"> Confirm Password</label> */}
            <input type="password" name="Cpassword" id="Cpassword" placeholder="Confirm Password" minLength="6" value={user.Cpassword} onChange={(e)=>setUser({...user,Cpassword:e.target.value})} className="  text-black  w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required />
          </div>
          <div className="text-right mt-2">
            <button href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</button>
          </div>
  
          <button type="submit" onClick={handleSignup} className="w-full block bg-blue-500 hover:bg-blue-900 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Register</button>
        </form>
}
        </div>

        <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-500" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-500" />
        </div>

        

        <div className="text-sm flex justify-between items-center mt-3">
          <p className='text-[#002D74]'  >Already have an account...</p>
          <button onClick={handleAlready} className= "  text-black  py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Login</button>
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

export default SignupPage;
