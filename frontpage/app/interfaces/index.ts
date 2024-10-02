export interface resultPageProps{
    params: {
        query: string; // Mendefinisikan tipe untuk query
    };
}

export interface ListCard{
    document_id: string,
    similarity: number,
    title: string,
}

export interface ListCardProps{
    item: ListCard,
}

export interface BeritaPageProps{
    params:{
        id: string,
    }
}