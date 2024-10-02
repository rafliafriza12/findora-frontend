"use client";
import { resultPageProps } from "@/app/interfaces";
import { useState, useEffect } from "react";
import ListCard from "@/app/components/ListCard";
import Link from "next/link";
import { Search } from "lucide-react";
import API from "@/app/utils/API";
import Loader from "@/app/components/Loader";
// import { resultPageProps } from "@/app/interfaces";
// import { useRouter } from "next/navigation";
const ResultPage: React.FC<resultPageProps> = ({ params }) => {
  const [search, setSearch] = useState<string>(decodeURIComponent(params.query));
  const [documents, setDocument] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getDocuments = () => {
    API.post("/search", {
        query: params.query
    }).then((res) => {
        console.log(res.data);
        setIsLoading(false);
        setDocument(res.data.results);
    }).catch((err) => {console.log(err); setIsLoading(false)});
  }

  useEffect(() => {
    getDocuments();
  },[]);

  return (
    <div className="w-full relative">
      <div className=" w-full h-full fixed z-[-5] bg-gradient-to-t from-[#a7c8cd] to-[#d7d8c5]"></div>

      <div className=" flex flex-col gap-20 w-full p-10">
        <div className=" w-full flex items-center gap-7">
          <div className=" w-[40%] h-14 text-xl font-medium rounded-full border-[1px] border-[#0091b5] relative flex items-center bg">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className=" h-full w-full rounded-full focus:outline-none px-5 bg-[#faf8df]"
            />
            <Link
              href={`/pages/result/${search}`}
              className=" h-11 w-11 absolute right-2 flex justify-center items-center bg-[#0091b5] rounded-full"
            >
              <Search color="#ffffff" />
            </Link>
          </div>
          <h1 className=" font-bold text-5xl text-[#0091b5]">Findora</h1>
        </div>

        {isLoading && (
            <Loader/>
        )}

        {documents.length !== 0 && !isLoading && (
        <div className=" w-full flex flex-col gap-10">
            {documents.map((doc: any, i: number) => {
                return(
                    <ListCard key={i} item={doc}/>
                );
            })}
        </div>

        )}

        {documents.length === 0 && !isLoading && (
                <div className=" w-full flex justify-center items-center">
                    <h1 className=" font-semibold text-2xl">Tidak Ada Dokumen yang Relevan</h1>
                </div>
        )}
      </div>
    </div>
  );
};


export default ResultPage;
