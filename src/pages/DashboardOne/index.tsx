import React from "react";

import { Button, Img, Line, List, Text } from "components";
import ChairmansDashboardPagination from "components/ChairmansDashboardPagination";
import Header1 from "components/Header1";

const DashboardOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-start mx-auto pb-[27px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="bg-white-A700_33 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1348px] mt-[21px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[5px] w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-[18px] rounded-[16px] shadow-bs1 w-[30%] md:w-full">
                <div className="flex flex-col gap-[39px] justify-start mb-16 w-[93%] md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtRobotoRomanMedium20"
                  >
                    Overview
                  </Text>
                  <div className="flex flex-row gap-[67px] items-center justify-end md:ml-[0] ml-[41px] w-[88%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="md:text-5xl text-[74px] text-black-900"
                        size="txtRobotoRomanRegular74"
                      >
                        89
                      </Text>
                      <Text
                        className="text-black-900 text-xl"
                        size="txtRobotoRomanRegular20"
                      >
                        Recruitees
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="md:text-5xl text-[74px] text-black-900"
                        size="txtRobotoRomanRegular74"
                      >
                        120
                      </Text>
                      <Text
                        className="text-black-900 text-xl"
                        size="txtRobotoRomanRegular20"
                      >
                        Cars
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-2.5 items-center justify-start md:mt-0 mt-2.5 p-[22px] sm:px-5 rounded-[16px] shadow-bs1 w-1/5 md:w-full">
                <Img
                  className="h-[52px] w-[52px]"
                  src="images/img_clock.svg"
                  alt="user"
                />
                <div className="flex flex-col items-center justify-start mb-[47px]">
                  <Text
                    className="md:text-5xl text-[74px] text-black-900"
                    size="txtRobotoRomanRegular74"
                  >
                    09
                  </Text>
                  <Text
                    className="text-red-A400 text-xl"
                    size="txtRobotoRomanSemiBold20"
                  >
                    Upcoming renewals
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2 rounded-[16px] shadow-bs1 w-[48%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-5 mt-2.5 pb-[5px] pr-[5px] w-[99%] md:w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[26%] md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtRobotoRomanMedium20"
                    >
                      Notifications
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_notification.svg"
                      alt="notifications_Two"
                    />
                  </div>
                  <List
                    className="flex flex-col gap-[15px] items-center mt-[25px] w-[99%]"
                    orientation="vertical"
                  >
                    <div className="flex sm:flex-col flex-row sm:gap-[42px] items-center justify-between w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtRobotoRomanBold16"
                      >
                        Receipt: Payment for KBX 123A is successful. You can
                        view yo...{" "}
                      </Text>
                      <div className="flex flex-row items-start justify-evenly">
                        <div className="bg-teal-500_01 h-2.5 my-1 rounded-[50%] w-2.5"></div>
                        <Text
                          className="text-base text-black-900"
                          size="txtRobotoRomanSemiBold16"
                        >
                          3 hrs ago
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-black-900 w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-[51px] items-center justify-between w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtRobotoRomanMedium16"
                      >
                        <span className="text-black-900 font-roboto text-left font-medium">
                          Reminder:{" "}
                        </span>
                        <span className="text-black-900 font-roboto text-left font-bold">
                          Policy renewal for Car DEF-456 is due in 7 days. Up...
                        </span>
                      </Text>
                      <div className="flex flex-row items-start justify-evenly">
                        <div className="bg-teal-500_01 h-2.5 my-1 rounded-[50%] w-2.5"></div>
                        <Text
                          className="text-base text-black-900"
                          size="txtRobotoRomanSemiBold16"
                        >
                          7 hrs ago
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[30px] w-[99%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Receipt: Payment for KBA 123A is successful. You can view
                      yo...{" "}
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Yesterday
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-[3px] mt-[30px] w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Receipt: Payment for KBX 123A is successful. You can view
                      yo...{" "}
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      2 days ago
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="mt-[50px] text-black-900 text-xl"
              size="txtRobotoRomanRegular20"
            >
              Lead the way and earn rewards!{" "}
            </Text>
            <Text
              className="mt-3 text-black-900_7f text-xl"
              size="txtRobotoRomanRegular20Black9007f"
            >
              <>
                Recruit a Chairman who shares our vision, and unlock <br />
                incentives for your contribution to our Sacco&#39;s growth.
              </>
            </Text>
            <Button
              className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[84px] mt-[11px] text-base text-center"
              shape="round"
              color="teal_500"
              size="md"
              variant="fill"
            >
              Recruit
            </Button>
            <div className="bg-white-A700 flex flex-row items-center justify-end md:ml-[0] ml-[1048px] mt-[43px] p-1.5 rounded-[10px] w-[23%] md:w-full">
              <Img
                className="h-[22px] md:h-auto object-cover w-[7%]"
                src="images/img_magnifyingglass.png"
                alt="magnifyingglass"
              />
              <Text
                className="ml-1 mr-[207px] text-base text-gray-800_99"
                size="txtRobotoRomanRegular16Gray80099"
              >
                Search
              </Text>
            </div>
            <div className="flex flex-row gap-3 items-center justify-end md:ml-[0] ml-[1286px] mt-[13px] w-[5%] md:w-full">
              <Text
                className="text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                Sort
              </Text>
              <Img className="h-6" src="images/img_mdisort.svg" alt="mdisort" />
            </div>
          </div>
          <div className="md:h-[310px] h-[327px] max-w-[1354px] mt-[3px] mx-auto md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="bg-white-A700 flex flex-row items-center justify-start p-2 rounded-[10px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-[7px] w-full">
                    <div className="bg-gray-600_26 h-[30px] rounded-[10px] w-[30px]"></div>
                    <Button
                      className="cursor-pointer min-w-[50px] md:ml-[0] ml-[245px] md:mt-0 my-[3px] rounded-md text-center text-xs"
                      shape="round"
                      color="green_500_99"
                      size="xs"
                      variant="fill"
                    >
                      Active
                    </Button>
                    <Img
                      className="h-6 md:ml-[0] ml-[977px] w-6"
                      src="images/img_overflowmenu.svg"
                      alt="notification"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-row items-center justify-start p-2 rounded-[10px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-[7px] w-full">
                    <div className="bg-gray-600_26 h-[30px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="bg-blue-500_99 h-[23px] justify-center md:ml-[0] ml-[245px] md:mt-0 my-[3px] pb-0.5 pt-[5px] px-[5px] rounded-md text-black-900 text-center text-xs w-[71px]"
                      size="txtRobotoRomanRegular12"
                    >
                      Suspended
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[956px] w-6"
                      src="images/img_overflowmenu.svg"
                      alt="notification_One"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-row items-center justify-start p-2 rounded-[10px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-[7px] w-full">
                    <div className="bg-gray-600_26 h-[30px] rounded-[10px] w-[30px]"></div>
                    <Button
                      className="cursor-pointer min-w-[57px] md:ml-[0] ml-[245px] md:mt-0 my-[3px] rounded-md text-center text-xs"
                      shape="round"
                      color="red_A700_99"
                      size="xs"
                      variant="fill"
                    >
                      Overdue
                    </Button>
                    <Img
                      className="h-6 md:ml-[0] ml-[970px] w-6"
                      src="images/img_overflowmenu.svg"
                      alt="notification_Two"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-row items-center justify-start p-2 rounded-[10px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-[7px] w-full">
                    <div className="bg-gray-600_26 h-[30px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="bg-amber-700_99 h-[23px] justify-center md:ml-[0] ml-[245px] md:mt-0 my-[3px] pb-0.5 pt-[5px] px-1.5 rounded-md text-black-900 text-center text-xs w-28"
                      size="txtRobotoRomanRegular12"
                    >
                      Upcoming renewal
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[915px] w-6"
                      src="images/img_overflowmenu.svg"
                      alt="notification_Three"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-start justify-start left-[4%] top-[0] w-[11%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-base text-black-900_7e"
                  size="txtRobotoRomanRegular16Black9007e"
                >
                  Registration number
                </Text>
              </div>
              <Text
                className="mt-[38px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                KDK 234T
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                KDK 234T
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                KDK 234T
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                KDK 234T
              </Text>
            </div>
            <div className="absolute flex flex-col items-start justify-start left-[35%] top-[0]">
              <Text
                className="text-base text-black-900_7e"
                size="txtRobotoRomanRegular16Black9007e"
              >
                Owner
              </Text>
              <Text
                className="mt-[41px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                David Ndungu
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                David Ndungu
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                David Ndungu
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                David Ndungu
              </Text>
            </div>
            <div className="absolute flex flex-col items-start justify-start right-[41%] top-[0]">
              <Text
                className="text-base text-black-900_7e"
                size="txtRobotoRomanRegular16Black9007e"
              >
                Route
              </Text>
              <Text
                className="mt-[39px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                NAIROBI - RONGAI
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                NAIROBI - RONGAI
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                NAIROBI - RONGAI
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                NAIROBI - RONGAI
              </Text>
            </div>
            <Text
              className="absolute left-[21%] text-base text-black-900_7e top-[0]"
              size="txtRobotoRomanRegular16Black9007e"
            >
              Policy status
            </Text>
            <div className="absolute flex flex-col items-start justify-start right-1/4 top-[0] w-[6%]">
              <Text
                className="text-base text-black-900_7e"
                size="txtRobotoRomanRegular16Black9007e"
              >
                Rating
              </Text>
              <Img
                className="h-6 mt-9"
                src="images/img_group12.svg"
                alt="close"
              />
              <Img
                className="h-6 mt-[52px]"
                src="images/img_map.svg"
                alt="signal"
              />
              <Img
                className="h-6 mt-[52px] w-6"
                src="images/img_star.svg"
                alt="signal_One"
              />
              <Img
                className="h-6 mt-[52px]"
                src="images/img_group12.svg"
                alt="close_One"
              />
            </div>
            <div className="absolute flex flex-col items-start justify-start right-[5%] top-[0]">
              <Text
                className="text-base text-black-900_7e"
                size="txtRobotoRomanRegular16Black9007e"
              >
                Renewal countdown
              </Text>
              <Text
                className="mt-[41px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                20 days
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                8 days
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                0 days
              </Text>
              <Text
                className="mt-[57px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                3 days
              </Text>
            </div>
          </div>
          <ChairmansDashboardPagination
            className="flex flex-row font-inter gap-2 items-center justify-start mt-16 md:px-5 w-auto"
            one="1"
            buttononetext="2"
            buttontwotext="..."
            buttonthreetext="9"
            buttonninetext="10"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardOnePage;
