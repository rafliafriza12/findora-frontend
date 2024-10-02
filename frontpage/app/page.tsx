"use client";
import { use, useState } from "react";
import { Search } from "lucide-react";
export default function Home() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className=" w-screen h-screen flex flex-col gap-8 items-center justify-center relative">
        <div className=" w-full h-full absolute z-[-5] bg-gradient-to-t from-[#a7c8cd] to-[#d7d8c5]">

        </div>
        <h1 className=" font-bold text-6xl text-[#0091b5]">Findora</h1>
        <div className=" w-[40%] h-14 text-xl font-medium rounded-full border-[1px] border-[#0091b5] relative flex items-center bg">
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className=" h-full w-full rounded-full focus:outline-none px-5 bg-[#faf8df]"/>
            <div className=" h-11 w-11 absolute right-2 flex justify-center items-center bg-[#0091b5] rounded-full">
                <Search color="#ffffff"/>
            </div>
        </div>
    </div>
  );
}
