import React from "react";

import { Line } from "components";

const WireframeOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto py-20 w-full">
        <div className="flex flex-col gap-[31px] items-center justify-start mb-[174px] w-full">
          <Line className="bg-black-900 h-px w-full" />
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1352px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
              <div className="bg-blue_gray-100 h-[317px] rounded-lg w-[27%]"></div>
              <div className="bg-blue_gray-100 h-[317px] rounded-lg w-[72%]"></div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-full">
              <div className="bg-blue_gray-100 h-[317px] rounded-lg w-1/2"></div>
              <div className="bg-blue_gray-100 h-[317px] rounded-lg w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WireframeOnePage;
