import Image from "next/image";
import Link from "next/link";
import touch from "@/public/touch.png";

export default function Home() {
  return (
    <div className="bg-[#FFADAD] min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl md:text-4xl font-bold text-[#3D3D3D] text-center">
        For the best experience, please use your mobile phone
      </h1>
      <Image src={touch} alt="Use a phone" width={200} height={200} className="mt-4" />

      <Link
        href="/landingPage"
        className="mt-6 px-6 py-3 bg-[#3D3D3D] text-white text-lg font-semibold rounded-full hover:bg-[#2a2a2a] transition"
      >
        Continue
      </Link>
    </div>
  );
}
