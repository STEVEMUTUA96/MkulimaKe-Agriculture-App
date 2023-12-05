import React from "react";

import { Img, Line, List, Text } from "components";

const WireframeTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto py-20 w-full">
        <div className="flex flex-col gap-[31px] items-center justify-start mb-[174px] w-full">
          <Line className="bg-black-900 h-px w-full" />
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1398px] mx-auto md:px-5 w-full">
            <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <div className="bg-blue_gray-100 flex flex-1 flex-col items-start justify-start p-[17px] rounded-lg w-full">
                <div className="flex flex-col gap-[51px] justify-start mb-[76px] mt-1.5 w-[78%] md:w-full">
                  <Text
                    className="ml-2 md:ml-[0] text-base text-black-900"
                    size="txtInterSemiBold16"
                  >
                    Overview
                  </Text>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col gap-[9px] items-center justify-start">
                      <Text
                        className="md:text-5xl text-[80px] text-black-900"
                        size="txtInterSemiBold80"
                      >
                        04
                      </Text>
                      <Text
                        className="text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Renewals due
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start">
                      <Text
                        className="md:text-5xl text-[80px] text-black-900"
                        size="txtInterSemiBold80"
                      >
                        3
                      </Text>
                      <Text
                        className="text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Rating
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-100 flex flex-1 flex-col items-start justify-start p-5 rounded-lg w-full">
                <div className="flex flex-col gap-[55px] justify-start mb-[98px] mt-[5px] w-[69%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtInterSemiBold16"
                  >
                    Insights
                  </Text>
                  <div className="flex flex-row items-start justify-end ml-4 md:ml-[0] w-[95%] md:w-full">
                    <Text
                      className="md:text-5xl text-[80px] text-black-900"
                      size="txtInterSemiBold80"
                    >
                      87
                    </Text>
                    <Text
                      className="mt-[59px] text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      policies expiring soon
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-100 flex flex-1 flex-col items-start justify-start p-4 rounded-lg w-full">
                <Text
                  className="mb-[257px] mt-[7px] text-base text-black-900"
                  size="txtInterSemiBold16"
                >
                  Notifications
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
              <div className="bg-blue_gray-100 flex md:flex-1 flex-col items-start justify-start p-3.5 rounded-lg w-[33%] md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start mb-[203px] ml-2.5 md:ml-[0] w-[53%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtInterSemiBold16"
                  >
                    Ratings
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-between w-full">
                    <Img
                      className="h-10 w-10"
                      src="images/img_star.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-10 w-10"
                      src="images/img_star.svg"
                      alt="signal_One"
                    />
                    <Img
                      className="h-10 w-10"
                      src="images/img_star.svg"
                      alt="signal_Two"
                    />
                    <Img
                      className="h-10 w-10"
                      src="images/img_star.svg"
                      alt="signal_Three"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-100 flex md:flex-1 flex-col items-start justify-end p-[3px] rounded-lg w-[67%] md:w-full">
                <div className="flex flex-col gap-2.5 justify-start md:ml-[0] ml-[17px] mt-[15px] w-[91%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[92%] md:w-full">
                    <div className="flex flex-col justify-start">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="mb-[18px] text-base text-black-900"
                          size="txtInterSemiBold16"
                        >
                          Vehicles
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[248px] sm:mt-0 mt-[17px] text-base text-black-900"
                          size="txtInterRegular16"
                        >
                          route
                        </Text>
                        <Text
                          className="ml-10 sm:ml-[0] sm:mt-0 mt-[18px] text-base text-black-900"
                          size="txtInterRegular16"
                        >
                          rating
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[394px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        color
                      </Text>
                    </div>
                    <Text
                      className="bg-blue_gray-100 border border-black-900_7f border-solid h-[22px] justify-center mb-2 md:mt-0 mt-[27px] pl-[18px] sm:pr-5 pr-[35px] rounded text-base text-black-900 w-[189px]"
                      size="txtInterRegular16"
                    >
                      Search
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[81px] w-[90%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Registration No
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[53px] text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Model{" "}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[53px] text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Sacco
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[53px] text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Owner
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[67px] text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      renewal countdown
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[53px] text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Action
                    </Text>
                  </div>
                  <Line className="bg-black-900 h-px md:ml-[0] ml-[72px] w-[92%]" />
                  <List
                    className="flex flex-col gap-3 items-center md:ml-[0] ml-[33px] w-[97%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_mobile.svg"
                        alt="contrast"
                      />
                      <Text
                        className="ml-2 md:ml-[0] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        1.
                      </Text>
                      <Text
                        className="ml-2 md:ml-[0] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        KDD 241K
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[94px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        TOYOTA
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[37px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Kenya Bus
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[21px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Eric Smith
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[41px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        128 days
                      </Text>
                      <Text
                        className="bg-blue_gray-100 border border-black-900_7f border-solid h-[27px] justify-center md:ml-[0] ml-[120px] px-3 py-[3px] rounded text-base text-black-900 w-[71px]"
                        size="txtInterRegular16"
                      >
                        renew
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_mobile.svg"
                        alt="contrast"
                      />
                      <Text
                        className="ml-2 md:ml-[0] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        2.
                      </Text>
                      <Text
                        className="ml-1.5 md:ml-[0] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        KDD 241K
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[94px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        TOYOTA
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[37px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Kenya Bus
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[21px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Eric Smith
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[41px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        128 days
                      </Text>
                      <Text
                        className="bg-blue_gray-100 border border-black-900_7f border-solid h-[27px] justify-center md:ml-[0] ml-[120px] px-3 py-[3px] rounded text-base text-black-900 w-[71px]"
                        size="txtInterRegular16"
                      >
                        renew
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_mobile.svg"
                        alt="contrast"
                      />
                      <Text
                        className="ml-2 md:ml-[0] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        3.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[5px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        KDD 241K
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[94px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        TOYOTA
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[37px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Kenya Bus
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[21px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Eric Smith
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[41px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        128 days
                      </Text>
                      <Text
                        className="bg-blue_gray-100 border border-black-900_7f border-solid h-[27px] justify-center md:ml-[0] ml-[120px] px-3 py-[3px] rounded text-base text-black-900 w-[71px]"
                        size="txtInterRegular16"
                      >
                        renew
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_mobile.svg"
                        alt="contrast"
                      />
                      <Text
                        className="ml-2 md:ml-[0] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        4.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[5px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        KDD 241K
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[94px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        TOYOTA
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[37px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Kenya Bus
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[21px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Eric Smith
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[41px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        128 days
                      </Text>
                      <Text
                        className="bg-blue_gray-100 border border-black-900_7f border-solid h-[27px] justify-center md:ml-[0] ml-[120px] px-3 py-[3px] rounded text-base text-black-900 w-[71px]"
                        size="txtInterRegular16"
                      >
                        renew
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_mobile.svg"
                        alt="contrast"
                      />
                      <Text
                        className="ml-2 md:ml-[0] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        5.
                      </Text>
                      <Text
                        className="ml-1.5 md:ml-[0] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        KDD 241K
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[94px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        TOYOTA
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[37px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Kenya Bus
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[21px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Eric Smith
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[41px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        128 days
                      </Text>
                      <Text
                        className="bg-blue_gray-100 border border-black-900_7f border-solid h-[27px] justify-center md:ml-[0] ml-[120px] px-3 py-[3px] rounded text-base text-black-900 w-[71px]"
                        size="txtInterRegular16"
                      >
                        renew
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WireframeTwoPage;
