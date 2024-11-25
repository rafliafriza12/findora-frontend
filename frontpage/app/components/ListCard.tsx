import { ListCardProps } from "../interfaces";
import Link from "next/link";
const ListCard: React.FC<ListCardProps> = ({ item }) => {
  return (
    <div className=" w-full box-border flex flex-col gap-5 px-6 py-9 font-sora text-white rounded-[16px] border-[1px] border-[#3c3c77] bg-[#15152e] duration-300 hover:-translate-y-2">
      <h1 className=" font-semibold text-lg">{item.title}</h1>
      <Link
        className=" hover:underline text-[#ada7cd]"
        href={`/pages/result/berita/${item.document_id}`}
      >
        Baca Selengkapnya
      </Link>
    </div>
  );
};

export default ListCard;
