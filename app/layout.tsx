import type { Metadata } from "next";
import { Caveat } from "next/font/google"; 
import "./globals.css";
import { AppProvider } from "@/app/components/Appcontext";
import MusicPlayer from "@/app/components/MusicPlayer";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "You Are a Beautiful Soul",
  description: "I made this as a way to say that I care about you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.className} bg-[#FFADAD] flex flex-col min-h-screen`}>
        <AppProvider> 
          <MusicPlayer /> 
          
          {/* Page Content */}
          <div className="flex-grow">{children}</div>

          {/* Footer Stays at Bottom */}
          <footer className="text-center text-[#3D3D3D] p-4">Made by Paul</footer>
        </AppProvider>
      </body>
    </html>
  );
}
