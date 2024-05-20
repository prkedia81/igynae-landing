"use client";

import React from "react";
import { Label } from "./ui/label";
import {
  PeriodFirstDaySchema,
  PeriodOtherDaySchema,
} from "@/lib/periodFormSchema";
import { dateFormat } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { periodOtherDay } from "@/services/period";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  userId: string;
  periodId: string;
  onSubmit: (data: any) => void;
}

export type PeriodOtherDaysInput = z.infer<typeof PeriodOtherDaySchema>;

function PeriodOtherDays({ userId, periodId }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PeriodOtherDaysInput>({
    resolver: zodResolver(PeriodOtherDaySchema),
  });

  const onSubmit: SubmitHandler<PeriodOtherDaysInput> = async (data) => {
    const resp = await axios.post("/api/period/otherDay", {
      userId: userId,
      periodId: periodId,
      formData: data,
    });
    router.push("/period");
  };

  const endPeriod = async () => {
    const resp = await axios.post("/api/period/endPeriod", {
      userId: userId,
      periodId: periodId,
    });
    router.push("/period");
  };

  const painLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const flowLevel = [
    "No Flow",
    "Light Flow",
    "Moderate Flow",
    "Heavy Flow",
    "Flooding",
  ];
  const clots = ["No Clots", "Small Clots", "Large Clots"];

  return (
    <>
      <section className="w-full max-w-3xl mx-auto py-12 md:py-12">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">
              Continue tracking your period on {dateFormat(Date.now())}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Answer the following questions to get a personalized
              recommendation.
            </p>
          </div>
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h2 className="text-xl font-semibold">How was your flow?</h2>
              <div className="mt-4 space-y-2">
                {flowLevel.map((level, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      {...register("flow")}
                      className=""
                      id={"flowLevel." + index}
                      value={`${level}`}
                    />
                    <Label
                      className="flex items-center space-x-3 cursor-pointer"
                      htmlFor={"flowLevel." + index}>
                      {/* <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-red-900 ">
                          <div className="w-3 h-3 rounded-full peer-checked:bg-gray-900 bg-white" />
                        </div> */}
                      <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                        {level}
                      </span>
                    </Label>
                  </div>
                ))}
                {errors["flow"] && (
                  <span className="text-red-600 text-sm mt-0.5">
                    {errors["flow"]?.message as string}
                  </span>
                )}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                Did you experience clotting?
              </h2>
              <div className="mt-4 space-y-2">
                {clots.map((level, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      {...register("clot")}
                      className=""
                      id={"clots." + index}
                      value={`${level}`}
                    />
                    <Label
                      className="flex items-center space-x-3 cursor-pointer"
                      htmlFor={"clots." + index}>
                      {/* <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-red-900 ">
                          <div className="w-3 h-3 rounded-full peer-checked:bg-gray-900 bg-white" />
                        </div> */}
                      <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                        {level}
                      </span>
                    </Label>
                  </div>
                ))}
                {errors["clot"] && (
                  <span className="text-red-600 text-sm mt-0.5">
                    {errors["clot"]?.message as string}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <Button type="submit">Submit your Period Data</Button>
              <Button variant={"destructive"} onClick={endPeriod}>
                END YOUR PERIOD
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default PeriodOtherDays;
