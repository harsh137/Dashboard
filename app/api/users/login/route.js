import { connectToDB } from "@/utils/database"
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

await connectToDB();

export async function POST(request) {
try{
    const reqBody= await request.json()
    const{email,password}=reqBody;
    // console.log(reqBody)

    //Check is user is present or not
    const user=await User.findOne({email})
    if(!user){
        return NextResponse.json({error:"User does not exist"},{status:400});

    }
    //Check is pass is correct
    const validPassword = await bcryptjs.compare(password,  user.password);
     
    if(!validPassword){
        return NextResponse.json({error:"Invalid Password"},{status:400});
    }

    //create Token Data (if user has Correct password)
    const tokenData={
        id:user._id,
        email:user.email,
        phone:user.phone,
    }
    //Genrate Token
    const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET,{
        expiresIn:"1d"
    })
    
    //Send Token
    const response= NextResponse.json({
        message:"Login Success",
        success:true,
        token:token,
    })
    //setting Cookies
    response.cookies.set("token",token)
    return response




}catch(error)
{
    return NextResponse.json({error:reportError.message},{status:500})
}

}
