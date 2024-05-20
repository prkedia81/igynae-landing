import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userClerkId = req.nextUrl.searchParams.get("userClerkId");
  const date = req.nextUrl.searchParams.get("date");
  console.log(userClerkId);
  console.log(date);
  return NextResponse.json({ message: "Hello World" });
  // Your logic here
}
