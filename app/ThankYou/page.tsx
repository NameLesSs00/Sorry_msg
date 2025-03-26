import Image from "next/image";
import cuteBearJumb from "@/public/cuteBearHug.gif";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFADAD] text-[#3D3D3D] p-6 text-center">
      {/* Message */}
      <h1 className="text-2xl font-semibold mb-4">
        Thank you for staying with me ❤️
      </h1>

      {/* GIF */}
      <Image src={cuteBearJumb} alt="Happy Bear GIF" width={200} height={200} priority />

      {/* Huge "strawberry" text */}
      <h1 className="text-7xl font-bold mt-6">strawberry🍓</h1>
    </div>
  );
}