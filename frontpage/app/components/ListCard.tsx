import { ListCardProps } from "../interfaces";
import NoPhoto from "../../public/assets/no-photos.png";
import Link from "next/link";
import Image from "next/image";
const ListCard: React.FC<ListCardProps> = ({ item }) => {
  const imageSrc: string =
    item?.imageSrc !== "Gambar tidak ditemukan"
      ? item?.imageSrc.split("?")[0]
      : "Gambar tidak ditemukan";
  const content: string = item?.paragraph.slice(0, 50);

  return (
    <div className=" w-full h-[30vh] box-border flex justify-between gap-5  font-sora text-white rounded-[16px] border-[1px] border-[#3c3c77] bg-[#15152e] duration-300 group">
      <div className=" w-[40%] h-full relative overflow-hidden rounded-l-[16px]">
        {imageSrc !== "Gambar tidak ditemukan" ? (
          <Image
            src={imageSrc}
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="relative group-hover:scale-[1.1] duration-300"
          />
        ) : (
          <Image
            src={NoPhoto}
            alt="No photo"
            layout="fill"
            objectFit="fill"
            className=" relative invert-[1] p-10"
          />
        )}
      </div>
      <div className="flex flex-col gap-3 w-[59%] px-6 py-9">
        <h1 className=" font-semibold text-lg">{item?.title}</h1>
        <p className=" text-justify text-gray-300">{content}[....]</p>
        <Link
          className=" hover:underline text-[#ada7cd]"
          href={`/pages/result/berita/${item?.document_id}`}
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default ListCard;
