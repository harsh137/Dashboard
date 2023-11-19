import { connectToDB } from "@/utils/database"
import Candidate from "@/model/selectedCandidates";
import { NextRequest, NextResponse } from "next/server";


await connectToDB();

export async function GET(request){
    console.log("check 1")
    const candidates = await Candidate.find({});
    console.log(candidates)
    return NextResponse.json(candidates);
}
