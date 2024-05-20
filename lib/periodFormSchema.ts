import { z } from "zod";

export const PeriodFirstDaySchema = z.object({
  pmsPain: z.string().min(1, "Please select the pain level"),
  flow: z.string().min(1, "Please select the flow level"),
  clot: z.string(),
});

export const PeriodOtherDaySchema = z.object({
  flow: z.string().min(1, "Please select the flow level"),
  clot: z.string(),
});
