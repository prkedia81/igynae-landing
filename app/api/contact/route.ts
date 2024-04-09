import ContactForm from "@/app/contact-us/page";
import sendMail from "@/services/emailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await (req.json() as Promise<ContactForm>);

  try {
    // Send Email
    const toMail = "prannaykedia1@gmail.com";
    const fromEmail = data.email || "prannaykedia4@gmail.com";
    const mailResponse: string | Error = await sendMail(
      data.name,
      fromEmail,
      toMail,
      data.name + " reached out to you",
      data.message
    );

    if (typeof mailResponse != "string") {
      throw Error(mailResponse.message);
    }

    // Add data to sheet
    // await addRowToSheet(
    //   {
    //     ...data,
    //   },
    //   "contact-us"
    // );

    // await connectMongo();
    // await ContactUs.create({
    //   ...data,
    //   date: new Date().toUTCString(),
    // });

    console.log(data.name, data.email, data.message);
    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return NextResponse.json({
      error: "Error on '/api/contact': " + error,
      status: 400,
    });
  }
}
