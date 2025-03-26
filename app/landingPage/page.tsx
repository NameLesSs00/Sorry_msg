import Link from "next/link";
import Image from "next/image";
import cuteBear from "@/public/cuteBear.gif";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen p-6 bg-[#FFADAD] text-[#3D3D3D]">
      <h1 className="max-w-2xl text-xl font-medium">
        I&apos;m trying to make a cute website for you just to tell you that I do care about you.
        I just felt like we were going so fast, and my emotions were driving me.
        I needed to take some time for myself to understand what is best for me.
        <br />
        <br />
        I&apos;m happy to say that I see you as a nice friend, and I&apos;m happy to continue 
        what is between us. So if you agree to continue this, please click the button below. 💖
      </h1>

      <Image
        src={cuteBear}
        alt="A cute bear"
        width={250}
        height={250}
        className="mt-6"
        priority
      />

      <Link
        href="/ForgiveMe"
        className="mt-6 px-6 py-3 bg-[#3D3D3D] text-white text-lg font-semibold rounded-full hover:bg-[#2a2a2a] transition"
      >
        Continue
      </Link>
    </div>
  );
}
