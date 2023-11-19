import { connectToDB } from "@/utils/database"
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

await connectToDB();
export async function POST(request) {
  //console.log("HEllo")  
  try {
    //console.log("HEllo")
    const reqBody = await request.json()
    console.log("HEllo")
    const {email,password,phone } = reqBody
    // console.log(reqBody);

    //Check is user already exist 
    const user = await User.findOne({ email })
    if (user) {
      console.log("User already exist");
      return NextResponse.json({ error: "User already Exist" }, { status: 400 })
    }

    //hash Password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash
      (password, salt)

    //Create new User
    const newUser = new User({
      email,
      password: hashedPassword,
      phone,
    })

    const savedUser = await newUser.save()
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
