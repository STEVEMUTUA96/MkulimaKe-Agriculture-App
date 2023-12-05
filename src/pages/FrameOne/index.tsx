import React from "react";

import { Text } from "components";

const FrameOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto p-[398px] md:px-10 sm:px-5 w-full">
        <Text
          className="mb-[88px] md:text-5xl text-[250px] text-black-900"
          size="txtInterSemiBold250"
        >
          GURUMESA
        </Text>
      </div>
    </>
  );
};

export default FrameOnePage;
