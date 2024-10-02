"use client";
import { BeritaPageProps } from "@/app/interfaces";
import { useState, useEffect } from "react";
import API from "@/app/utils/API";
import Loader from "@/app/components/Loader";
const Berita: React.FC<BeritaPageProps> = ({ params }) => {
  const [document, setDocument] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getDocument = () => {
    API.get(`/documents/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setDocument(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getDocument();
  }, []);

  return (
    <div className="w-full">
      <div className=" w-full h-full fixed z-[-5] bg-gradient-to-t from-[#a7c8cd] to-[#d7d8c5]"></div>
      {isLoading ? (
       <Loader />
      ) : (
        <div className=" w-full flex flex-col p-10 items-center gap-10">
        <h1 className=" font-bold text-2xl">{document.title}</h1>
        <p className=" w-full whitespace-pre-line">{document.paragraph}</p>
      </div>
        
      )}
    </div>
  );
};

export default Berita;
