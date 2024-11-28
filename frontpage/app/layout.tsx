import type { Metadata } from "next";
import localFont from "next/font/local";
import square from "../public/assets/petak.png";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Findora",
  description: "Finding and Explora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <div className="h-screen w-screen fixed z-[-100] bg-[#0f0f24]">
          <video
            loop
            autoPlay
            muted
            playsInline={true}
            className="relative"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/assets/bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-screen w-screen fixed z-[-90] bg-transparent">
          <Image
            src={square}
            alt="square"
            layout="fill"
            objectFit="cover"
            className="relative p-[200px]"
          />
        </div>

        {children}
      </body>
    </html>
  );
}
