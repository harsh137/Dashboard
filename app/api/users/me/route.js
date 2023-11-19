import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";
import User from "@/model/user"

export async function GET(request){
    try{
        const userID = await getDataFromToken(request);
        const user=await User.find({_id: userID}).select("-password -_id");
        return NextResponse.json({message:"user Found",
        data:user
    }) 
    }catch(error){
        return NextResponse.json({error:reportError.message},
            {status:400});
        }
    }
