import { getUserAllPeriods } from "@/services/period";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userClerkId = req.nextUrl.searchParams.get("userClerkId") || "";
  // console.log(userClerkId);
  const periodData = await getUserAllPeriods(userClerkId);
  // console.log(periodData);
  return NextResponse.json({ periodData: periodData });
}
