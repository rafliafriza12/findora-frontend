"use client";
import { BeritaPageProps } from "@/app/interfaces";
import Image from "next/image";
import findora from "../../../../../public/assets/findora.png";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import API from "@/app/utils/API";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
const Berita: React.FC<BeritaPageProps> = ({ params }) => {
  const [document, setDocument] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
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

  const goBack = () => {
    router.back(); // Kembali ke halaman sebelumnya
  };

  useEffect(() => {
    getDocument();
  }, []);

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className=" w-full flex flex-col p-14 items-center gap-10">
          <div
            onClick={() => router.push("/")}
            className=" px-28 py-2 rounded-full bg-black cursor-pointer"
          >
            <Image src={findora} alt="Findora" width={200} height={100} />
          </div>
          <div className=" w-[80%]">
            <div
              onClick={() => goBack()}
              className=" flex items-center gap-3 cursor-pointer"
            >
              <ArrowLeft color={"#ffffff"} size={30} />{" "}
              <span className=" font-sora font-semibold text-white text-lg">
                Kembali
              </span>
            </div>
          </div>
          <div className=" w-[80%] flex flex-col items-center gap-10 p-14 bg-[#15152e] border-[1px] border-[#3c3c77] rounded-[16px]">
            <h1 className=" font-bold text-2xl font-sora text-white">
              {document.title}
            </h1>
            <div className="w-full">
              <div className=" w-[50%] h-[40vh] relative float-left mr-10 mb-5">
                <Image
                  src={document?.imageSrc}
                  objectFit="cover"
                  layout="fill"
                  alt="Gambar"
                  className="relative rounded-[16px]"
                />
              </div>
              <p className=" w-full whitespace-pre-line text-lg text-[#ada7cd]">
                {document.paragraph}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Berita;
