"use client";

import PeriodData from "@/components/PeriodData";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { dateFormat } from "@/lib/utils";
import { User, Users } from "@/models/User";
import connectMongo from "@/services/mongoConnect";
import { PeriodDataInput } from "@/services/period";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Terminal } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Periods() {
  const { user } = useUser();
  const [date, setDate] = useState<Date | undefined>();
  const [fetchedData, setFetchedData] = useState<
    PeriodDataInput[] | undefined
  >();
  const [flow, setFlow] = useState<string>("");
  const [clot, setClot] = useState<string>("");
  const [currentPeriod, setCurrentPeriod] = useState<string>("no");
  const [userId, setUserId] = useState<string>("");

  // useEffect(() => {
  //   const fetchPeriod = async () => {
  //     try {
  //       await connectMongo();
  //       const userDb = JSON.parse(
  //         JSON.stringify(await User.findOne<Users>({ clerk_id: user?.id }))
  //       );
  //       const period = userDb.periodStarted;
  //       setCurrentPeriod(period); // Assuming the API returns JSON data
  //       setUserId(userDb._id);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchPeriod();
  // }, []);

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
      setClot("No Period");
    }
  }, [date]);

  return (
    <>
      <div className="my-8 flex flex-row justify-center w-full gap-12">
        <Calendar mode="single" selected={date} onSelect={setDate} />
        {date && (
          <PeriodData
            currentPeriod={currentPeriod}
            date={dateFormat(date.getTime())}
            flow={flow}
            clot={clot}
            clerkUserId={user?.id || ""}
            userId={userId}
          />
        )}
      </div>
      <div className="mt-4 max-w-[900px] mx-auto">
        <Alert>
          <Terminal className="h-4 w-4" />
          {/* <AlertTitle>Heads up!</AlertTitle> */}
          <AlertDescription>
            <span className="font-semibold">Next Period:</span> 14th Nov 2023
            <br />
            <span className="font-semibold">Ovulation Period:</span> 16th Nov
            2023
          </AlertDescription>
        </Alert>
      </div>
      <Link href="add-period" className="mt-4 w-full">
        <Button className="w-[85%] mx-16">Start Period</Button>
      </Link>
    </>
  );
}

export default Periods;
