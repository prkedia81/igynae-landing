import { Document, Schema, model, models } from "mongoose";

export interface Periods extends Document {
  user_id: string;
  timestamp: number; // Assuming you want to store timestamps as Date objects
  //   firstDayTimestamp: number;
  lastDayTimestamp: number;
  data_input: {
    isFirstDay?: boolean;
    timestamp: number; // In EPOCH timestamp
    pmsPain?: string;
    flow: string; // mandatory
    clot: string; // mandatory
    isLastDay?: boolean;
  }[];
}

const periodSchema = new Schema({
  user_id: String,
  timestamp: Date,
  //   firstDayTimestamp: Number,
  lastDayTimestamp: Number,
  data_input: [
    {
      isFirstDay: Boolean,
      timestamp: Number,
      pmsPain: String,
      flow: { type: String, required: true },
      clot: { type: String, required: true },
      isLastDay: Boolean,
    },
  ],
});

export const Period = models.Period || model<Periods>("Period", periodSchema);
