"use client";

import React, { use, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

interface Props {
  cardTitle: string;
  content: string;
  color?: string;
}

function HoverCard({ cardTitle, content, color = "bg-white" }: Props) {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <Card
      className="w-full h-72"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="hover:border hover:border-purple-500 bg-purple-100 bg-opacity-50 flex flex-col gap-4 px-6 py-8 justify-center h-full">
        <h2 className={cn("text-2xl font-bold", "")}>{cardTitle}</h2>
        {showText && <p className="text-sm text-gray-600">{content}</p>}
      </div>
    </Card>
  );
}

export default HoverCard;
