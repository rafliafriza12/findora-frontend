import { ListCardProps } from "../interfaces";
import Link from "next/link";
const ListCard: React.FC<ListCardProps> = ({item}) => {
    return(
        <div className=" w-full h-[10vh]">
            <h1 className=" font-semibold text-xl">{item.title}</h1>
            <Link href={`/pages/result/berita/${item.document_id}`}>Baca Selengkapnya</Link>
        </div>
    );
}

export default ListCard;