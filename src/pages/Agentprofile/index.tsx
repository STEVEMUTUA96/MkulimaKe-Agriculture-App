import React from "react";

import { Button, Img, Text } from "components";
import Header1 from "components/Header1";

const AgentprofilePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-start mx-auto pb-[25px] w-full">
        <div className="flex flex-col md:gap-10 gap-[78px] justify-start w-full">
          <Header1 className="bg-white-A700_33 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
          <div className="flex flex-col justify-start ml-20 md:ml-[0] md:px-5 w-[70%] md:w-full">
            <Text
              className="text-teal-500 text-xl"
              size="txtRobotoRomanMedium20Teal500"
            >
              Profile
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[55px] w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[106px] justify-start w-1/5 md:w-full">
                <Img
                  className="h-[174px] md:h-auto ml-5 md:ml-[0] rounded-[50%] w-[174px]"
                  src="images/img_ellipse3.png"
                  alt="ellipseThree"
                />
                <Text
                  className="text-teal-500 text-xl"
                  size="txtRobotoRomanMedium20Teal500"
                >
                  Recruit
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-[34px] justify-start w-[73%] md:w-full">
                <div className="flex flex-col gap-[33px] justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[9px] w-[99%] md:w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-base text-gray-600"
                        size="txtRobotoRomanMedium16Gray600"
                      >
                        Surname
                      </Text>
                      <Text
                        className="text-base text-black-900"
                        size="txtRobotoRomanRegular16"
                      >
                        Mike
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[146px]">
                      <Text
                        className="text-base text-gray-600"
                        size="txtRobotoRomanMedium16Gray600"
                      >
                        Other names
                      </Text>
                      <Text
                        className="text-base text-black-900"
                        size="txtRobotoRomanRegular16"
                      >
                        Luca Anthony
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[92px] md:ml-[0] ml-[314px] md:mt-0 my-[3px] text-base text-center"
                      shape="round"
                      color="teal_500"
                      size="md"
                      variant="fill"
                    >
                      Edit info
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[48%] md:w-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start">
                      <Text
                        className="text-base text-gray-600"
                        size="txtRobotoRomanMedium16Gray600"
                      >
                        Agent code
                      </Text>
                      <Text
                        className="text-base text-black-900"
                        size="txtRobotoRomanRegular16"
                      >
                        AG20234K
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start">
                      <Text
                        className="text-base text-gray-600"
                        size="txtRobotoRomanMedium16Gray600"
                      >
                        Email
                      </Text>
                      <Text
                        className="text-base text-black-900"
                        size="txtRobotoRomanRegular16"
                      >
                        Mike@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[9px]">
                  <Text
                    className="text-base text-gray-600"
                    size="txtRobotoRomanMedium16Gray600"
                  >
                    Contact
                  </Text>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    +2547000000000
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="ml-5 md:ml-[0] mt-2.5 text-black-900 text-xl"
              size="txtRobotoRomanRegular20"
            >
              Lead the way and earn rewards!{" "}
            </Text>
            <Text
              className="ml-5 md:ml-[0] mt-1 text-base text-black-900_7f"
              size="txtRobotoRomanRegular16Black9007f"
            >
              <>
                Recruit a Chairman who shares our vision, and unlock <br />
                incentives for your contribution to our growth.
              </>
            </Text>
            <Button
              className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[141px] md:ml-[0] ml-[263px] mr-[590px] mt-[13px] text-base text-center"
              shape="round"
              color="teal_500"
              size="md"
              variant="fill"
            >
              Start recruiting
            </Button>
            <Text
              className="mt-[21px] text-teal-500 text-xl"
              size="txtRobotoRomanMedium20Teal500"
            >
              Commission
            </Text>
            <Text
              className="ml-5 md:ml-[0] mt-[11px] text-black-900 text-xl"
              size="txtRobotoRomanRegular20"
            >
              Earning summary
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start ml-5 md:ml-[0] mt-[15px] w-[65%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-4 rounded-[16px] shadow-bs1 w-[44%] md:w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start mb-20 mt-1 w-[97%] md:w-full">
                  <div className="flex flex-row items-end justify-evenly w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtRobotoRomanRegular20"
                      >
                        October earnings
                      </Text>
                      <Text
                        className="mt-[3px] text-base text-gray-600"
                        size="txtInterRegular16Gray600"
                      >
                        0.5% more than September
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] mt-[18px] w-[30px]"
                      src="images/img_reply.svg"
                      alt="moving"
                    />
                  </div>
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                    size="txtRobotoRomanRegular50"
                  >
                    Ksh 1000
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[50px] items-start justify-start p-4 rounded-[16px] shadow-bs1">
                <Text
                  className="mt-1 text-black-900 text-xl"
                  size="txtRobotoRomanRegular20"
                >
                  Total earnings
                </Text>
                <Text
                  className="mb-20 md:ml-[0] ml-[5px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                  size="txtRobotoRomanRegular50"
                >
                  Ksh 12000
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentprofilePage;
