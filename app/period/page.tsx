"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";
import React, { useState } from "react";

function Page() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <>
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
      <div className="my-8 flex flex-row justify-center w-full">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className=""
          // classNames={{
          //   months:
          //     "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
          //   month: "space-y-4 w-full flex flex-col",
          //   table: "w-full h-full border-collapse space-y-1",
          //   head_row: "",
          //   row: "w-full mt-2",
          // }}
        />
      </div>
      <Link href="add-period" className="w-full">
        <Button className="w-[85%] mx-12">Start Period</Button>
      </Link>
    </>
  );
}

export default Page;
