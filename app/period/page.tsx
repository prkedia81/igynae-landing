import PeriodData from "@/components/PeriodData";
import { PeriodFirstDayInputs } from "@/components/PeriodFirstDay";
import { PeriodOtherDaysInput } from "@/components/PeriodOtherDays";
import Periods from "@/components/periods/periods";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { dateFormat } from "@/lib/utils";
import { User, Users } from "@/models/User";
import connectMongo from "@/services/mongoConnect";
import {
  PeriodDataInput,
  periodFirstDay,
  periodOtherDay,
} from "@/services/period";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";

function Page() {
  // const onOtherDay: SubmitHandler<PeriodOtherDaysInput> = async (
  //   data: any,
  //   currentPeriod: string,
  //   clerkUserId: string
  // ) => {
  //   "use server";
  //   await periodOtherDay(clerkUserId, currentPeriod, data);
  //   redirect("/period");
  // };

  // const onFirstday: SubmitHandler<PeriodFirstDayInputs> = async (
  //   data,
  //   clerkUserId: string
  // ) => {
  //   "use server";
  //   await periodFirstDay(clerkUserId, data);
  //   redirect("/period");
  // };

  return (
    <div className="mb-6">
      <div className="mt-8 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Track your periods
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-lg">
            {
              "The calendar is a representative of your period's status. Click on the button below the calendar to start tracking."
            }
          </p>
        </div>
      </div>
      <Periods />
      {/* onOtherDay={onOtherDay} onFirstDat={onFirstDay} */}
    </div>
  );
}

export default Page;
