export interface resultPageProps {
  params: {
    query: string; // Mendefinisikan tipe untuk query
  };
}

export interface ListCard {
  document_id: string;
  similarity: number;
  paragraph: string;
  imageSrc: string;
  title: string;
}

export interface ListCardProps {
  item: ListCard;
}

export interface BeritaPageProps {
  params: {
    id: string;
  };
}

export interface EvaluationProps {
  isOpen: boolean;
  setIsOpen: any;
  evaluationMetricsCosine: any;
  runtimeCosine: string;
  evaluationMetricsJaccard: any;
  runtimeJaccard: string;
}
