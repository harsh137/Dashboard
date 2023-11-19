"use client"
import {useState,useEffect, useMemo} from "react";
import cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from 'next/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {

  const logo="/Logo1.png"
  const router=useRouter()
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    
    const ck=cookies.get('token');
    if(ck){
      setIsLoggedIn(true);
      
    }
    // console.log(isLoggedIn)


    
  },[]);

  const haldleLogout = async() => {
  try {
    const data=await axios.get('/api/users/logout')
    console.log("logout Successfully");
    router.push('/login')

    
  } catch (error) {
    console.log(error.message)
  }
  }
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 dark:bg-neutral-600 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="inline-block mr-4 py-2 "
              href="/login"
            >
              <Image src="/Logo.png" alt='logo' width={100} height={50} className="rounded-sm"/>
              
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-zinc-50 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            {
              isLoggedIn ?
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <button
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                onClick={haldleLogout}
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Log Out</span>
              </button>
            </li>
            
             
            
          </ul>              
              
              
              
              :<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="./login"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Login</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="./signup"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Sign Up</span>
                </a>
              </li>
              
               
              
            </ul>
            
            }
            
          </div>
        </div>
      </nav>
    </>
  );
}
