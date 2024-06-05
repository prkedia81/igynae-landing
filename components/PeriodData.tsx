import { CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  PeriodDataInput,
  periodFirstDay,
  periodOtherDay,
} from "@/services/period";
import PeriodFirstDay, { PeriodFirstDayInputs } from "./PeriodFirstDay";
import PeriodOtherDays, { PeriodOtherDaysInput } from "./PeriodOtherDays";
import { redirect } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

interface Props {
  date: string;
  flow: string;
  clot: string;
  currentPeriod: string;
  clerkUserId: string;
  userId: string;
  // periods: PeriodDataInput[] | undefined;
}

export default function PeriodData({
  date,
  flow,
  clot,
  currentPeriod,
  clerkUserId,
  userId,
}: Props) {
  const onFirstday = () => {
    console.log("On First Day");
  };
  const onOtherDay = () => {
    console.log("On Other Day");
  };

  if (flow !== "No Period" && clot !== "No Period") {
    return (
      <Card className="w-full max-w-md">
        <CardHeader className="bg-gray-900 text-white p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold">{date}</h2>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-[100px_1fr] gap-x-4">
            <span className="font-medium text-gray-500">Flow</span>
            <p>{flow}</p>
          </div>
          <div className="grid grid-cols-[100px_1fr] gap-x-4">
            <span className="font-medium text-gray-500">Clot</span>
            <p>{clot}</p>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    // return (
    // <>
    //   <Card className="w-full max-w-2xl max-h-md overflow-y-scroll">
    //     <CardHeader className="bg-gray-900 text-white p-6 rounded-t-lg">
    //       <h2 className="text-2xl font-bold">Add your period</h2>
    //     </CardHeader>
    //     <CardContent className="p-6 space-y-4 max-h-32">
    //       {currentPeriod === "no" ? (
    //         <PeriodFirstDay onSubmit={onFirstday} userId={userId} />
    //       ) : (
    //         <PeriodOtherDays
    //           onSubmit={onOtherDay}
    //           userId={userId}
    //           periodId={currentPeriod}
    //         />
    //       )}
    //     </CardContent>
    //   </Card>
    // </>
    // );
    return <p>No Period</p>;
  }
}
