import { EvaluationProps } from "@/app/interfaces";
const Evaluation: React.FC<EvaluationProps> = ({
  isOpen,
  setIsOpen,
  evaluationMetricsCosine,
  runtimeCosine,
  evaluationMetricsJaccard,
  runtimeJaccard,
}) => {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden={!isOpen}
      className={`${
        isOpen ? "flex" : "hidden"
      } overflow-y-auto bg-[#000000]/30 backdrop-blur-sm overflow-x-hidden fixed top-0 right-0 left-0 z-[100] justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-[#15152e] rounded-lg shadow border-[1px] border-[#3c3c77]">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-600 rounded-t">
            <h3 className="text-xl font-semibold text-[#ada7cd]">Evaluasi</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4 font-sora">
            <div className=" w-full py-3 border-b-[1px] border-gray-600 flex flex-col gap-2">
              <h1 className="text-base leading-relaxed text-[#ada7cd] font-bold">
                Cosine Similatiry
              </h1>
              <h1 className="text-base leading-relaxed text-[#ada7cd]">
                Runtime : {runtimeCosine}
              </h1>
              <h1 className="text-base leading-relaxed text-[#ada7cd]">
                Precision : {evaluationMetricsCosine?.precision}
              </h1>
              <h1 className="text-base leading-relaxed text-[#ada7cd]">
                Recall : {evaluationMetricsCosine?.recall}
              </h1>
              <h1 className="text-base leading-relaxed text-[#ada7cd]">
                f-measure : {evaluationMetricsCosine?.f1Measure}
              </h1>
            </div>
            <div className=" w-full py-3 border-b-[1px] border-gray-600 flex flex-col gap-2">
              <h1 className="text-base leading-relaxed text-[#ada7cd] font-bold">
                Jaccard Similatiry
              </h1>
              <h1 className="text-base leading-relaxed text-[#ada7cd]">
                Runtime : {runtimeJaccard}
              </h1>
              <h1 className="text-base leading-relaxed text-[#ada7cd]">
                Precision : {evaluationMetricsJaccard?.precision}
              </h1>
              <h1 className="text-base leading-relaxed text-[#ada7cd]">
                Recall : {evaluationMetricsJaccard?.recall}
              </h1>
              <h1 className="text-base leading-relaxed text-[#ada7cd]">
                f-measure : {evaluationMetricsJaccard?.f1Measure}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
