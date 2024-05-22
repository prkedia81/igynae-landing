"use client";

import PeriodData from "@/components/PeriodData";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { dateFormat } from "@/lib/utils";
import { PeriodDataInput } from "@/services/period";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
  const { user } = useUser();
  const [date, setDate] = useState<Date | undefined>();
  const [fetchedData, setFetchedData] = useState<
    PeriodDataInput[] | undefined
  >();
  const [flow, setFlow] = useState<string>("");
  const [clot, setClot] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/period/periodData", {
          params: {
            userClerkId: user?.id,
            date: date,
          },
        });
        const responseData = await response.data.periodData;
        setFetchedData(responseData); // Assuming the API returns JSON data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // fetchData();

    if (!date) {
      // Only fetch if userInput is not empty
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    const currentPeriod = fetchedData?.filter(
      (data) => new Date(data.createdAt).toDateString() === date?.toDateString()
    );

    console.log(currentPeriod);

    if (currentPeriod !== undefined && currentPeriod.length != 0) {
      setFlow(currentPeriod[0].flow);
      setClot(currentPeriod[0].clot);
    } else {
      setFlow("No Period");
      setClot("No Clot");
    }
  }, [date]);

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
      <div className="my-8 flex flex-row justify-center w-full gap-12">
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
        {date && (
          <PeriodData
            // periods={fetchedData}
            date={dateFormat(date.getTime())}
            flow={flow}
            clot={clot}
          />
        )}
      </div>
      <Link href="add-period" className="w-full">
        <Button className="w-[85%] mx-12">Start Period</Button>
      </Link>
    </>
  );
}

export default Page;
