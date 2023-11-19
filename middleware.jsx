
import { NextResponse } from 'next/server'
 

export function middleware(request) {
    const path = request.nextUrl.pathname
    const isPublish = path === '/login'|| path==='/signup' 
    
    const token =request.cookies.get('token')?.value || "";

    // const getUserDetails=async()=>{
    //   const res= await axios.get('/api/users/me')
    //   // console.log(res.data);
    //   return res.data;
    // }
    // const data=getUserDetails();

    // console.log(data.email)

    


    if(isPublish && token){
      
        return NextResponse.redirect(new URL('/dashboard',
        request.nextUrl))

    }
    if(!isPublish && !token){
        return NextResponse.redirect(new URL('/login',
        request.nextUrl))
    }


}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher:[
    '/',
    '/login',
    '/signup',
    '/dashboard/:path*'
  ],
}