"use client";

import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { dateFormat } from "@/lib/utils";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PeriodFirstDaySchema } from "@/lib/periodFormSchema";
import { Button } from "./ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  userId: string;
  onSubmit?: (data: any) => void;
}

export type PeriodFirstDayInputs = z.infer<typeof PeriodFirstDaySchema>;

function PeriodFirstDay({ userId }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PeriodFirstDayInputs>({
    resolver: zodResolver(PeriodFirstDaySchema),
  });

  const painLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const flowLevel = ["Light Flow", "Moderate Flow", "Heavy Flow", "Flooding"];
  const clots = ["No Clots", "Small Clots", "Large Clots"];

  const onSubmit: SubmitHandler<PeriodFirstDayInputs> = async (data) => {
    const resp = await axios.post("/api/period/firstDay", {
      userId: userId,
      formData: data,
    });
    router.push("/period");
  };

  return (
    <>
      <section className="w-full max-w-3xl mx-auto py-12 md:py-12">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">
              Start your period on {dateFormat(Date.now())}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Answer the following questions to get a personalized
              recommendation.
            </p>
          </div>
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h2 className="text-xl font-semibold">How was your PMS?</h2>
              <div className="flex flex-row gap-6">
                <div className="w-[30%] mt-4 space-y-2">
                  {painLevel.map((level, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        {...register("pmsPain")}
                        className=""
                        id={"painLevel." + level}
                        value={`${level}`}
                      />
                      <Label
                        className="flex items-center space-x-3 cursor-pointer"
                        htmlFor={"painLevel." + level}>
                        {/* <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-red-900 ">
                          <div className="w-3 h-3 rounded-full peer-checked:bg-gray-900 bg-white" />
                        </div> */}
                        <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                          {level}
                        </span>
                      </Label>
                    </div>
                  ))}
                  {errors["pmsPain"] && (
                    <span className="text-red-600 text-sm mt-0.5">
                      {errors["pmsPain"]?.message as string}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-semibold">
                    Physical Symptoms may include:
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>Breast swelling and tenderness</li>
                    <li>Acne</li>
                    <li>Bloating and weight gain</li>
                    <li>Headache</li>
                    <li>Joint pain</li>
                    <li>Backache</li>
                    <li>Constipation or diarrhea</li>
                    <li>Food cravings</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-semibold">
                    Emotional Symptoms may include:
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>Irritability</li>
                    <li>Mood swings</li>
                    <li>Crying spells</li>
                    <li>Depression</li>
                    <li>Anxiety</li>
                    <li>Sleeping too much or too little</li>
                    <li>Trouble with concentration and memory</li>
                    <li>Less interest in sex</li>
                  </ul>
                </div>
              </div>
            </div>
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
            <div>
              <Button type="submit">Submit your Period Data</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default PeriodFirstDay;
