

import { connectToDB } from "@/utils/database"
import Candidate from "@/model/selectedCandidates";
import { NextRequest, NextResponse } from "next/server";


console.log("jgggku")
await connectToDB();
export async function POST(request) {
  console.log("HEllo 1")  
  try {
    console.log("HEllo 2")
    const reqBody = await request.json()
    console.log("HEllo 3")
    const { 
        salutation,
        name,
        position,
        fromDate,
        toDate,
        email,
        uid,
        viewed} = reqBody
    console.log(reqBody);
    console.log("CHECK 1")
    const data = {
      Name: name,
      Position:position,
      startDate:fromDate,
      EndDate:toDate
    };
    
   

    

    //Create new User
    const newCandidate = new Candidate({
        salutation,
        name,
        position,
        fromDate,
        toDate,
        email,
        uid,
        viewed
    
    })

    const savedCandidate = await newCandidate.save()

   

    // console.log(savedUser);

    return NextResponse.json({ message: "User Created Successfully", success: true},
      { status: 201 })
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message },
      { status: 500 })

  }
}
