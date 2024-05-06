"use client";
import AddPeriod from "@/components/AddPeriod";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

function Page() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <>
      {date === undefined ? (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      ) : (
        <AddPeriod date={date} />
      )}
    </>
  );
}

export default Page;
