"use client";

import React, { useState } from "react";
import DoctorSvg from "@/components/DoctorSvg";

interface Props {
  url: string;
}

function Chatbot({ url }: Props) {
  const [showChatBox, setShowChatBox] = useState(true);

  function handleClick() {
    setShowChatBox(!showChatBox);
  }

  return (
    <div className="py-12 px-24 flex flex-row flex-wrap w-full items-end">
      <div onClick={handleClick} className="w-48 h-48 cursor-pointer">
        <img src="./monica.jpeg"></img>
        {/* <DoctorSvg /> */}
      </div>
      {showChatBox && (
        <div className="w-[75%] h-[500px]">
          <iframe
            width="100%"
            height="100%"
            // src="https://copilotstudio.microsoft.com/environments/Default-a5f92cde-2109-4aa7-9f01-51e3a6dce385/bots/cracc_copilot1/canvas?__version__=2"></iframe>
            src={url}
          />
        </div>
      )}
    </div>
  );
}

export default Chatbot;
