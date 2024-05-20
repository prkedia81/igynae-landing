import { CardHeader, CardContent, Card } from "@/components/ui/card";

interface Props {
  date: string;
  flow: string;
  clot: string;
}

export default function PeriodData({ date, flow, clot }: Props) {
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
}
