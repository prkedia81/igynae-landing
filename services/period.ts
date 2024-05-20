import { PeriodFirstDayInputs } from "@/components/PeriodFirstDay";
import { PeriodOtherDaysInput } from "@/components/PeriodOtherDays";
import connectMongo from "./mongoConnect";
import { Period } from "@/models/Period";
import { User } from "@/models/User";

export async function periodFirstDay(
  userId: string,
  data: PeriodFirstDayInputs
) {
  try {
    console.log("HERE");
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
