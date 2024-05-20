import { endPeriod, periodFirstDay, periodOtherDay } from "@/services/period";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log(data);
    await endPeriod(data.userId, data.periodId);
    // const resp =
    return Response.json({ message: "Success" }, { status: 201 });
    // if (resp) return Response.json({ message: "Success" }, { status: 201 });
    // else return Response.json({ message: "Failed" }, { status: 500 });
  } catch (err) {
    return Response.error();
  }
}
