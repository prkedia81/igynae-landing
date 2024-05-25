import { ChatUrl } from "@/models/ChatUrl";
import connectMongo from "@/services/mongoConnect";
import { NextResponse } from "next/server";
import { chatUrlId } from "@/lib/chatUrlId";

interface URLData {
  url: string;
}

export async function POST(req: Request) {
  const data = await (req.json() as Promise<URLData>);
  const url = data.url;
  await connectMongo();
  try {
    const newUrl = await ChatUrl.findByIdAndUpdate(chatUrlId, {
      url: url,
    });
    return NextResponse.json({
      message: "Successfully Updated URL!",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "There was some error...",
      status: 500,
    });
  }
}
