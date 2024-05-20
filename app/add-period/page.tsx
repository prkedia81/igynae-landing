import PeriodFirstDay, {
  PeriodFirstDayInputs,
} from "@/components/PeriodFirstDay";
import PeriodOtherDays, {
  PeriodOtherDaysInput,
} from "@/components/PeriodOtherDays";
import { User, Users } from "@/models/User";
import connectMongo from "@/services/mongoConnect";
import { periodFirstDay, periodOtherDay } from "@/services/period";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";

async function page() {
  const { userId } = auth();
  if (!userId) redirect("/");

  await connectMongo();
  const userDb = JSON.parse(
    JSON.stringify(await User.findOne<Users>({ clerk_id: userId }))
  );

  if (!userDb) redirect("/");

  const period = userDb.periodStarted;

  const onOtherDay: SubmitHandler<PeriodOtherDaysInput> = async (data) => {
    "use server";
    await periodOtherDay(userId, period, data);
    redirect("/period");
  };

  const onFirstday: SubmitHandler<PeriodFirstDayInputs> = async (data) => {
    "use server";
    await periodFirstDay(userId, data);
    redirect("/period");
  };

  return (
    <>
      {period === "no" ? (
        <PeriodFirstDay onSubmit={onFirstday} userId={userDb._id as string} />
      ) : (
        <PeriodOtherDays
          onSubmit={onOtherDay}
          userId={userDb._id as string}
          periodId={period}
        />
      )}
      ;
    </>
  );
}

export default page;
