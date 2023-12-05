import React from "react";

import { Text } from "components";

const FrameTwentyNinePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-4 items-start justify-center mx-auto p-16 md:px-10 sm:px-5 w-full">
        <Text
          className="mt-[11px] text-black-900 text-xs"
          size="txtInterRegular12"
        >
          registration number
        </Text>
        <Text className="text-black-900 text-xs" size="txtInterRegular12">
          Engine capacity
        </Text>
        <Text className="text-black-900 text-xs" size="txtInterRegular12">
          Body type
        </Text>
        <Text className="text-black-900 text-xs" size="txtInterRegular12">
          Inspection status
        </Text>
        <Text
          className="mb-[199px] text-black-900 text-xs"
          size="txtInterRegular12"
        >
          Seat capacity
        </Text>
      </div>
    </>
  );
};

export default FrameTwentyNinePage;
