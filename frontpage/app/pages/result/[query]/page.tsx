"use client";
import { resultPageProps } from "@/app/interfaces";
import { useState, useEffect } from "react";
import Image from "next/image";
import findora from "../../../../public/assets/findora.png";
import ListCard from "@/app/components/ListCard";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";
import API from "@/app/utils/API";
import Loader from "@/app/components/Loader";
const ResultPage: React.FC<resultPageProps> = ({ params }) => {
  const [search, setSearch] = useState<string>(
    decodeURIComponent(params.query)
  );
  const [documentsCosine, setDocumentCosine] = useState<any>([]);
  const [documentsJaccard, setDocumentJaccard] = useState<any>([]);
  const [isLoadingCosine, setIsLoadingCosine] = useState<boolean>(true);
  const [isLoadingJaccard, setIsLoadingJaccard] = useState<boolean>(true);
  const router: any = useRouter();

  const getDocumentsCosine = () => {
    API.post("/search", {
      query: params.query,
    })
      .then((res) => {
        console.log(res.data);
        setIsLoadingCosine(false);
        setDocumentCosine(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingCosine(false);
      });
  };
  const getDocumentsJaccard = () => {
    API.post("/search-jaccard", {
      query: params.query,
    })
      .then((res) => {
        console.log(res.data);
        setIsLoadingJaccard(false);
        setDocumentJaccard(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingJaccard(false);
      });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/pages/result/${search}`);
    }
  };

  useEffect(() => {
    getDocumentsJaccard();
    getDocumentsCosine();
  }, []);

  return (
    <div className="w-full relative flex flex-col items-center py-14 gap-14">
      <div
        onClick={() => router.push("/")}
        className=" px-28 py-2 rounded-full bg-black cursor-pointer"
      >
        <Image src={findora} alt="Findora" width={200} height={100} />
      </div>

      <div className=" w-[70%] flex flex-col items-start gap-3">
        <div className=" w-full h-[7vh] flex items-center justify-between">
          <input
            type="text"
            placeholder="Search"
            onKeyPress={(e) => handleKeyPress(e)}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[93%] h-full bg-[#ffffff]/5 rounded-[20px] border-[1px] border-[#ffffff]/15 focus:outline-none text-white px-4 text-xl backdrop-blur-[3px]"
          />
          <Link
            href={`/pages/result/${search}`}
            className=" h-full w-[7vh] bg-gradient-to-r from-[#426BFF] to-[#8F79FF] rounded-[20px] flex justify-center items-center"
          >
            <Search size={30} color="#ffffff" />
          </Link>
        </div>
        <div className=" text-white font-momentum flex items-center gap-3">
          <h1 className=" font-bold text-xl">Result for : </h1>
          <h1 className=" px-7 py2 rounded-full bg-gradient-to-r from-[#426BFF] to-[#8F79FF] font-semibold text-lg">
            {decodeURIComponent(params.query)}
          </h1>
        </div>
      </div>

      <div className="w-[70%] flex flex-col items-start justify-between gap-10">
        <div className=" w-full flex flex-col">
          <div className="w-full flex justify-between items-end">
            <div className="w-[50%] flex justify-center text-white font-sora font-extrabold text-lg ">
              <h1 className=" py-5 px-8 rounded-t-[16px] bg-gradient-to-r from-[#1E1EAD] to-[#A2A2FD]">
                COSINE SIMILARIRY
              </h1>
            </div>
            <div className="w-[50%] flex justify-center text-white font-sora font-extrabold text-lg ">
              <h1 className=" py-5 px-8 rounded-t-[16px] bg-gradient-to-l from-[#1E1EAD] to-[#A2A2FD]">
                JACCARD SIMILARIRY
              </h1>
            </div>
          </div>
          <div className=" w-full py-1 border-[1px] border-[#ffffff]/10 rounded-full bg-gradient-to-r from-[#1E1EAD] via-[#A2A2FD] to-[#1E1EAD]"></div>
        </div>

        <div className="w-full flex items-start justify-between">
          <div className=" w-[49%] flex flex-col gap-10">
            {isLoadingCosine ? (
              <Loader />
            ) : documentsCosine.length > 0 ? (
              documentsCosine.map((document: any, i: number) => {
                return <ListCard key={i} item={document} />;
              })
            ) : (
              <div className=" w-full box-border flex flex-col gap-5 px-6 py-9 font-sora text-white rounded-[16px] border-[1px] border-[#3c3c77] bg-[#15152e] duration-300 hover:-translate-y-2">
                <h1 className=" font-semibold text-lg">
                  Tidak Ada Dokumen yang Relevan
                </h1>
              </div>
            )}
          </div>
          <div className=" w-[49%] flex flex-col gap-10">
            {isLoadingJaccard ? (
              <Loader />
            ) : documentsJaccard.length > 0 ? (
              documentsJaccard.map((document: any, i: number) => {
                return <ListCard key={i} item={document} />;
              })
            ) : (
              <div className=" w-full box-border flex flex-col gap-5 px-6 py-9 font-sora text-white rounded-[16px] border-[1px] border-[#3c3c77] bg-[#15152e] duration-300 hover:-translate-y-2">
                <h1 className=" font-semibold text-lg">
                  Tidak Ada Dokumen yang Relevan
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
