import { Document, Schema, model, models } from "mongoose";

export interface Users extends Document {
  name?: string;
  // age: number;
  clerk_id: string;
  periodStarted: string; // Assuming this is meant to represent a string identifier like "xyz_123"
  noFlow: boolean;
}

const userSchema = new Schema(
  {
    name: String,
    // age: Number,
    clerk_id: { type: String, required: true },
    periodStarted: { type: String, default: "no" },
    noFlow: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = models.User || model<Users>("User", userSchema);
