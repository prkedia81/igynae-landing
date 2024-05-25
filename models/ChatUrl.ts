import { Document, Schema, model, models } from "mongoose";

export interface ChatUrls extends Document {
  url: string;
}

const chatUrlSchema = new Schema({
  url: String,
});

export const ChatUrl =
  models.ChatUrl || model<ChatUrls>("ChatUrl", chatUrlSchema);
