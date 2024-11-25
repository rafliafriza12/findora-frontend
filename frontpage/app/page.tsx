"use client";
import { useState } from "react";
import Link from "next/link";
import findora from "../public/assets/findora.png";
import { Search, ThumbsUp, Newspaper, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Home() {
  const landingCardContent: any = [
    {
      title: "Findora",
      icon: ThumbsUp,
      description:
        "Your Trusted News Navigator Delivering Accurate Information",
    },
    {
      title: "News",
      icon: Newspaper,
      description: "Navigating You to Reliable Insights",
    },
    {
      title: "Information",
      icon: Info,
      description: "Your Source for Effective News Navigation",
    },
  ];
  const [search, setSearch] = useState<string>("");
  const router: any = useRouter();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/pages/result/${search}`);
    }
  };

  return (
    <div className=" w-screen h-screen flex flex-col gap-8 items-center justify-center bg-transparent relative">
      <div className=" py-4 px-14 bg-black text-white rounded-full font-momentum font-bold text-2xl border absolute top-16">
        <h1>LET'S FIND AND EXPLORA</h1>
      </div>
      <div className="w-full flex flex-col items-center gap-16 mt-36">
        <div className="w-[30vw] h-[15vh] relative">
          <Image src={findora} alt="Findora" layout="fill" objectFit="cover" />
        </div>
        <div className="w-[40%] flex flex-col items-center gap-8">
          <h1 className="text-white font-momentum font-bold text-lg">
            How can I help you find the news?
          </h1>
          <div className=" w-full h-[7vh] flex items-center justify-between">
            <input
              type="text"
              placeholder="Search"
              onKeyPress={(e) => handleKeyPress(e)}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[88%] h-full bg-[#ffffff]/5 rounded-[20px] border-[1px] border-[#ffffff]/15 focus:outline-none text-white px-4 text-xl backdrop-blur-[3px]"
            />
            <Link
              href={`/pages/result/${search}`}
              className=" h-full w-[7vh] bg-gradient-to-r from-[#426BFF] to-[#8F79FF] rounded-[20px] flex justify-center items-center"
            >
              <Search size={30} color="#ffffff" />
            </Link>
          </div>
          <div className="w-full h-[18vh] flex items-center justify-between">
            {landingCardContent.map((item: any, i: number) => {
              return (
                <div className=" w-[32%] h-full p-6 bg-[#15152e] flex flex-col items-center gap-4 border-[1px] border-[#3c3c77] rounded-[16px] font-sora text-white font-semibold hover:-translate-y-2 duration-300">
                  <div className=" w-full flex items-center gap-2">
                    <h1>{item?.title}</h1>
                    <item.icon />
                  </div>
                  <p className="w-full text-[#ada7cd] text-sm font-normal">
                    {item?.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
