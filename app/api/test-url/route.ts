import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import connectMongo from "@/services/mongoConnect";
import { User } from "@/models/User";

export async function POST(req: Request) {
  return new Response("", { status: 200 });
}
