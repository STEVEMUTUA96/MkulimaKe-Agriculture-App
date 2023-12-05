import React from "react";

import { Button, Img, List, Text } from "components";
import Header1 from "components/Header1";

const LoginFivePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto gap-[39px] items-center justify-start mx-auto pb-[108px] w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mx-auto w-full">
            <div className="flex flex-col justify-start w-full">
              <Header1 className="bg-white-A700_33 flex md:flex-col flex-row md:gap-5 items-center justify-center shadow-bs w-full" />
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[1040px] mr-[100px] mt-[134px] p-1.5 rounded-[10px] w-[21%] md:w-full">
                <Img
                  className="h-[22px] sm:h-auto object-cover w-[7%] md:w-full"
                  src="images/img_magnifyingglass.png"
                  alt="magnifyingglass"
                />
                <Text
                  className="ml-1 md:ml-[0] mr-[207px] text-base text-gray-800_99"
                  size="txtRobotoRomanRegular16Gray80099"
                >
                  Search
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[113px] mt-[19px] w-[78%] md:w-full">
                <Text
                  className="text-base text-black-900_7e"
                  size="txtRobotoRomanRegular16Black9007e"
                >
                  Registration number
                </Text>
                <Text
                  className="md:ml-[0] ml-[285px] text-base text-black-900_7e"
                  size="txtRobotoRomanRegular16Black9007e"
                >
                  Owner
                </Text>
                <Text
                  className="md:ml-[0] ml-[135px] text-base text-black-900_7e"
                  size="txtRobotoRomanRegular16Black9007e"
                >
                  Route
                </Text>
                <Text
                  className="md:ml-[0] ml-[316px] text-base text-black-900_7e"
                  size="txtRobotoRomanRegular16Black9007e"
                >
                  Renewal countdown
                </Text>
              </div>
            </div>
          </div>
          <div className="md:h-[2269px] sm:h-[745px] h-[777px] mt-[-18.97px] mx-auto w-[89%] md:w-full z-[1]">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <List
                  className="flex flex-col gap-4 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-2 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[358px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      NAIROBI - RONGAI
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[226px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      12 days
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-2 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[358px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      NAIROBI - RONGAI
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[226px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      0 days
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-2 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[358px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      NAIROBI - RONGAI
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[226px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      2 months
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-2 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[358px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      NAIROBI - RONGAI
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[226px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      21 days
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-2 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[358px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      NAIROBI - RONGAI
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[226px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      3 months
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-2 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[358px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      NAIROBI - RONGAI
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[226px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      0 days
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-2 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="bg-yellow-A700_99 h-[23px] justify-center md:ml-[0] ml-[178px] md:mt-0 my-2.5 pb-0.5 pt-[5px] px-1.5 rounded-md text-black-900 text-center text-xs w-28"
                      size="txtRobotoRomanRegular12"
                    >
                      Upcoming renewal
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[68px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      NAIROBI - RONGAI
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[226px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      3 months
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-2 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[358px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      NAIROBI - RONGAI
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[226px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      3 months
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-2 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[358px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      NAIROBI - RONGAI
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[226px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      3 months
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-2 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[358px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[81px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      NAIROBI - RONGAI
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[226px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      3 months
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[24%] my-auto w-[9%]">
              <Text
                className="text-base text-black-900_7e"
                size="txtRobotoRomanRegular16Black9007e"
              >
                Policy status
              </Text>
              <Text
                className="bg-yellow-A700_99 h-[23px] justify-center mt-8 pb-0.5 pt-[5px] px-1.5 rounded-md text-black-900 text-center text-xs w-28"
                size="txtRobotoRomanRegular12"
              >
                Upcoming renewal
              </Text>
              <Button
                className="cursor-pointer min-w-[57px] mt-[53px] rounded-md text-center text-xs"
                shape="round"
                color="red_A200_99"
                size="xs"
                variant="fill"
              >
                Overdue
              </Button>
              <Button
                className="cursor-pointer min-w-[61px] mt-[53px] rounded-md text-center text-xs"
                shape="round"
                color="light_green_500_99"
                size="xs"
                variant="fill"
              >
                Renewed
              </Button>
              <Button
                className="cursor-pointer min-w-[61px] mt-[53px] rounded-md text-center text-xs"
                shape="round"
                color="light_green_500_99"
                size="xs"
                variant="fill"
              >
                Renewed
              </Button>
              <Button
                className="cursor-pointer min-w-[61px] mt-[53px] rounded-md text-center text-xs"
                shape="round"
                color="light_green_500_99"
                size="xs"
                variant="fill"
              >
                Renewed
              </Button>
              <Button
                className="cursor-pointer min-w-[57px] mt-[53px] rounded-md text-center text-xs"
                shape="round"
                color="red_A200_99"
                size="xs"
                variant="fill"
              >
                Overdue
              </Button>
              <Button
                className="cursor-pointer min-w-[61px] mt-[129px] rounded-md text-center text-xs"
                shape="round"
                color="light_green_500_99"
                size="xs"
                variant="fill"
              >
                Renewed
              </Button>
              <Button
                className="cursor-pointer min-w-[61px] mt-[53px] rounded-md text-center text-xs"
                shape="round"
                color="light_green_500_99"
                size="xs"
                variant="fill"
              >
                Renewed
              </Button>
              <Button
                className="cursor-pointer min-w-[61px] mt-[53px] rounded-md text-center text-xs"
                shape="round"
                color="light_green_500_99"
                size="xs"
                variant="fill"
              >
                Renewed
              </Button>
            </div>
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[26%] w-[6%]">
              <div className="flex flex-col items-start justify-start w-full">
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
                <Img
                  className="h-6 mt-[52px] w-6"
                  src="images/img_star.svg"
                  alt="signal_Two"
                />
                <Img
                  className="h-6 mt-[52px] w-6"
                  src="images/img_star.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-6 mt-[52px] w-6"
                  src="images/img_star.svg"
                  alt="signal_Four"
                />
                <div className="flex flex-row items-center justify-start mt-[52px] w-[66%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_star.svg"
                    alt="signal_Five"
                  />
                  <Img
                    className="h-6 ml-0.5 w-6"
                    src="images/img_star.svg"
                    alt="signal_Six"
                  />
                </div>
                <div className="flex flex-row gap-0.5 items-center justify-start mt-[52px] w-[66%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-start w-6"
                    style={{ backgroundImage: "url('images/img_star.svg')" }}
                  >
                    <Img
                      className="h-6 w-6"
                      src="images/img_star.svg"
                      alt="signal_Seven"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-start ml-0.5 w-6"
                    style={{ backgroundImage: "url('images/img_star.svg')" }}
                  >
                    <Img
                      className="h-6 w-6"
                      src="images/img_star.svg"
                      alt="signal_Eight"
                    />
                  </div>
                </div>
                <Img
                  className="h-6 mt-[52px] w-6"
                  src="images/img_star.svg"
                  alt="signal_Nine"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[47px] justify-start ml-[60px] mt-[-NaNpx] w-[67%] z-[1]">
            <Text
              className="md:ml-[0] ml-[562px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtRobotoRomanMedium24"
            >
              Vehicles list
            </Text>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <div className="flex flex-row gap-2.5 items-start justify-between w-[16%]">
                <Text
                  className="text-base text-teal-500"
                  size="txtRobotoRomanRegular16Teal500"
                >
                  Home{" "}
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_expandmore.svg"
                  alt="television"
                />
                <Text
                  className="text-base text-teal-500"
                  size="txtRobotoRomanRegular16Teal500"
                >
                  Vehicles
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[81px] mt-0.5 text-base text-center"
                shape="round"
                color="teal_500"
                size="md"
                variant="fill"
              >
                Renew
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row font-inter gap-2 items-center justify-start md:px-5 w-auto">
          <Button
            className="flex h-8 items-center justify-center w-8"
            shape="round"
            color="blue_gray_300_87"
            size="xs"
            variant="fill"
          >
            <Img
              className="h-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </Button>
          <div className="flex flex-col font-sfprotext h-8 items-center justify-start w-8">
            <Button
              className="!text-deep_purple-A700 border border-deep_purple-A700 border-solid cursor-pointer font-bold h-8 text-center text-sm w-8"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              1
            </Button>
          </div>
          <Button
            className="border border-gray-300 border-solid cursor-pointer font-bold h-8 text-center text-sm w-8"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            2
          </Button>
          <Button
            className="border border-gray-300 border-solid cursor-pointer font-bold h-8 text-center text-sm w-8"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            ...
          </Button>
          <Button
            className="border border-gray-300 border-solid cursor-pointer font-bold h-8 text-center text-sm w-8"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            9
          </Button>
          <Button
            className="border border-gray-300 border-solid cursor-pointer font-bold h-8 text-center text-sm w-8"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            10
          </Button>
          <Button
            className="border border-gray-300 border-solid flex h-8 items-center justify-center w-8"
            shape="round"
            color="white_A700"
            size="xs"
            variant="fill"
          >
            <Img className="h-6" src="images/img_send.svg" alt="arrowright" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginFivePage;
