"use client";

import React, { useState } from "react";
import DoctorSvg from "@/components/DoctorSvg";

function Chatbot() {
  const [showChatBox, setShowChatBox] = useState(false);

  function handleClick() {
    setShowChatBox(!showChatBox);
  }

  return (
    <div className="py-12 px-24 flex flex-row flex-wrap w-full items-end">
      <div onClick={handleClick} className="w-48 h-48 cursor-pointer">
        <DoctorSvg />
      </div>
      {showChatBox && (
        <div className="w-[75%] h-[500px]">
          <iframe
            width="100%"
            height="100%"
            src="https://ragchatbotpr.azurewebsites.net/"></iframe>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
