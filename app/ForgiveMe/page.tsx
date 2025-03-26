"use client";
import { useAppContext } from "@/app/components/Appcontext";
import Image from "next/image";
import Link from "next/link";
import cuteBearJumb from "@/public/jumbCuteBear.gif";
import sorryData from "@/app/data/app.json"; 

export default function ForgiveMe() {
  const { sorryNum, setSorryNum } = useAppContext();
  const { sorry_msgs } = sorryData;
  const maxClicks = sorry_msgs.length; 

  const baseWidth = 140;
  const baseHeight = 50;
  const growthFactor = 0.1; // 10% per click

  const handleNoClick = () => {
    if (sorryNum < maxClicks) {
      setSorryNum(sorryNum + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFADAD] text-[#3D3D3D] p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        {sorryNum > 0 
          ? sorry_msgs[Math.min(sorryNum - 1, maxClicks - 1)]
          : "Would you like to continue our friendship?"}
      </h1>

      <Image src={cuteBearJumb} alt="Thinking GIF" width={200} height={200} priority />

      <div className="flex items-center justify-center gap-6 mt-8 w-full max-w-[90vw]">
        <Link href="/ThankYou" className="flex-1 min-w-[140px]">
          <button
            className="text-white font-semibold rounded-lg hover:bg-green-600 transition bg-green-500"
            style={{ 
              width: sorryNum >= maxClicks ? "50vw" : `min(${baseWidth * (1 + growthFactor * sorryNum)}px, 50vw)`, 
              height: `${baseHeight * (1 + growthFactor * sorryNum * 3)}px`,  
              fontSize: "1.2rem"
            }} 
          >
            Yes
          </button>
        </Link>

        <button
          onClick={handleNoClick}
          disabled={sorryNum >= maxClicks}
          className="w-[140px] h-[50px] text-white font-semibold rounded-lg transition bg-red-500 hover:bg-red-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          No
        </button>
      </div>
    </div>
  );
}
