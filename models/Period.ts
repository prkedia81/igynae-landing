import { Document, Schema, model, models } from "mongoose";

export interface Periods extends Document {
  user_id: string;
  // timestamp: number; // Assuming you want to store timestamps as Date objects
  //   firstDayTimestamp: number;
  lastDayTimestamp: string;
  data_input: {
    isFirstDay?: boolean;
    createdAt: string; // In EPOCH timestamp
    pmsPain?: string;
    flow: string; // mandatory
    clot: string; // mandatory
    isLastDay?: boolean;
  }[];
}

const dataInputSchema = new Schema(
  {
    isFirstDay: Boolean,
    pmsPain: String,
    flow: { type: String, required: true },
    clot: { type: String, required: true },
    isLastDay: Boolean,
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const periodSchema = new Schema(
  {
    user_id: String,
    //   firstDayTimestamp: Number,
    lastDayTimestamp: String,
    data_input: [dataInputSchema],
  },
  { timestamps: true }
);

export const Period = models.Period || model<Periods>("Period", periodSchema);
