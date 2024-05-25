import Chatbot from "@/components/Chatbot";
import { ChatUrl } from "@/models/ChatUrl";
import connectMongo from "@/services/mongoConnect";
import { chatUrlId } from "@/lib/chatUrlId";

async function page() {
  await connectMongo();
  const url: string = (await ChatUrl.findById(chatUrlId)).url;

  return <Chatbot url={url} />;
}

export default page;
