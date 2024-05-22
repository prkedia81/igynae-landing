import { PeriodFirstDayInputs } from "@/components/PeriodFirstDay";
import { PeriodOtherDaysInput } from "@/components/PeriodOtherDays";
import connectMongo from "./mongoConnect";
import { Period, Periods } from "@/models/Period";
import { User, Users } from "@/models/User";

export interface PeriodDataInput {
  isFirstDay?: boolean;
  pmsPain?: string;
  flow: string;
  clot: string;
  isLastDay?: boolean;
  createdAt: string;
}

export async function getUserAllPeriods(
  clerkUserId: string
): Promise<PeriodDataInput[]> {
  await connectMongo();
  const user: Users | null = await User.findOne({ clerk_id: clerkUserId });
  // console.log(user);
  if (!user) return [];
  const allPeriods: Periods[] = await Period.find({ user_id: user._id });
  const allPeriodData: PeriodDataInput[] = [];
  allPeriods.forEach((period) => {
    allPeriodData.push(...period.data_input);
  });
  return allPeriodData;
}

export async function periodFirstDay(
  userId: string,
  data: PeriodFirstDayInputs
) {
  try {
    // console.log("HERE");
    await connectMongo();
    const newPeriod = await Period.create({
      user_id: userId,
      data_input: {
        isFirstDay: true,
        pmsPain: data.pmsPain,
        flow: data.flow,
        clot: data.clot || "No Clot",
      },
    });
    console.log(newPeriod);
    const updatedUser = await User.findByIdAndUpdate(userId, {
      periodStarted: newPeriod._id,
    });
    console.log(updatedUser);
  } catch (err) {
    console.log(err);
  }
}

export async function periodOtherDay(
  userId: string,
  periodId: string,
  data: PeriodOtherDaysInput
) {
  const updatedPeriod = await Period.findByIdAndUpdate(periodId, {
    $push: {
      data_input: {
        flow: data.flow,
        clot: data.clot || "No Clot",
      },
    },
  });
}

export async function endPeriod(userId: string, periodId: string) {
  const updatedPeriod = await Period.findByIdAndUpdate(periodId, {
    lastDayTimestamp: new Date(),
    $push: {
      data_input: {
        flow: "No Flow",
        clot: "No Clot",
        isLastDay: true,
      },
    },
  });
  const updatedUser = await User.findByIdAndUpdate(userId, {
    periodStarted: "no",
  });
}
