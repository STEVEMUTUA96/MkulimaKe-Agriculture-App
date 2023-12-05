import React from "react";

import { Button, Img, Text } from "components";
import ChairmansDashboardPagination from "components/ChairmansDashboardPagination";
import Header from "components/Header";

const ClickingonanimagePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-end mx-auto w-full">
        <div className="flex flex-col justify-end w-full">
          <Header className="bg-white-A700_33 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-[26px] items-start justify-end md:ml-[0] ml-[801px] mr-[171px] mt-14 md:px-5 w-[33%] md:w-full">
            <Button
              className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[142px] text-base text-center"
              shape="round"
              color="teal_500"
              size="md"
              variant="fill"
            >
              Report incident
            </Button>
            <div className="bg-white-A700 flex flex-row items-center justify-center md:mt-0 mt-1 p-1.5 rounded-[10px] w-[65%] md:w-full">
              <Img
                className="h-[22px] md:h-auto ml-[5px] object-cover w-[7%]"
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
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[188px] mr-[744px] mt-[11px] md:px-5 w-[36%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-black-900_7e"
                size="txtRobotoRomanRegular16Black9007e"
              >
                Claim ID
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[125px] text-base text-black-900_7e"
              size="txtRobotoRomanRegular16Black9007e"
            >
              Registration number
            </Text>
            <Text
              className="md:ml-[0] ml-[70px] text-base text-black-900_7e"
              size="txtRobotoRomanRegular16Black9007e"
            >
              Claimant name
            </Text>
          </div>
          <div className="md:h-[1071px] h-[516px] sm:h-[534px] md:ml-[0] ml-[150px] mr-[86px] mt-[18px] md:px-5 relative w-[84%] md:w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex md:flex-col flex-row gap-7 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-[49%] md:w-full">
                  <div className="bg-white-A700 flex flex-row items-center justify-between p-[19px] rounded-[10px] w-full">
                    <Text
                      className="ml-[18px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      123AZR
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="mr-[30px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-row items-center justify-between p-[19px] rounded-[10px] w-full">
                    <Text
                      className="ml-[18px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      234QWE
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="mr-[30px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-row items-center justify-between p-[19px] rounded-[10px] w-full">
                    <Text
                      className="ml-[18px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      345ER
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="mr-[30px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-row items-center justify-between p-[19px] rounded-[10px] w-full">
                    <Text
                      className="ml-[18px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      456RT
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="mr-[30px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-row items-center justify-between p-[19px] rounded-[10px] w-full">
                    <Text
                      className="ml-[18px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      567TY
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="mr-[30px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-row items-center justify-between p-[19px] rounded-[10px] w-full">
                    <Text
                      className="ml-[18px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      456RT
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="mr-[30px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-row items-center justify-between p-[19px] rounded-[10px] w-full">
                    <Text
                      className="ml-[18px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      567TY
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      KDK 234T
                    </Text>
                    <Text
                      className="mr-[30px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      David Ndungu
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-4 rounded-[10px] w-[49%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-[85px] mt-10 w-[72%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-[62%] md:w-full">
                      <Text
                        className="text-base text-gray-600"
                        size="txtRobotoRomanRegular16Gray600"
                      >
                        Claim ID:
                      </Text>
                      <Text
                        className="text-base text-teal-500"
                        size="txtRobotoRomanMedium16Teal500"
                      >
                        123AZR
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[38px] items-center justify-start mt-[13px] w-[66%] md:w-full">
                      <Text
                        className="text-base text-gray-600"
                        size="txtRobotoRomanRegular16Gray600"
                      >
                        Registration number:
                      </Text>
                      <Text
                        className="text-base text-teal-500"
                        size="txtRobotoRomanMedium16Teal500"
                      >
                        KDK 234T
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[78px] items-start justify-start mt-[13px] w-[74%] md:w-full">
                      <Text
                        className="text-base text-gray-600"
                        size="txtRobotoRomanRegular16Gray600"
                      >
                        Claimant name:
                      </Text>
                      <Text
                        className="text-base text-teal-500"
                        size="txtRobotoRomanMedium16Teal500"
                      >
                        David Ndungu
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-3.5 w-[67%] md:w-full">
                      <Text
                        className="text-base text-gray-600"
                        size="txtRobotoRomanRegular16Gray600"
                      >
                        Claim type:
                      </Text>
                      <Text
                        className="text-base text-teal-500"
                        size="txtRobotoRomanMedium16Teal500"
                      >
                        Vandalism
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[88px] items-start justify-start mt-[15px] w-[70%] md:w-full">
                      <Text
                        className="text-base text-gray-600"
                        size="txtRobotoRomanRegular16Gray600"
                      >
                        Date reported:
                      </Text>
                      <Text
                        className="text-base text-teal-500"
                        size="txtRobotoRomanMedium16Teal500"
                      >
                        13/10/2023
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-end md:ml-[0] ml-[25px] mt-[53px] w-[94%] md:w-full">
                      <Img
                        className="h-[117px] md:h-auto object-cover rounded w-[48%] sm:w-full"
                        src="images/img_pexelsphotoby.png"
                        alt="pexelsphotoby"
                      />
                      <Img
                        className="h-[117px] md:h-auto object-cover rounded w-[47%] sm:w-full"
                        src="images/img_pexelsphotoby_117x175.png"
                        alt="pexelsphotoby_One"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[25px] mt-[11px] w-[74%] md:w-full">
                      <Text
                        className="text-base text-light_blue-A700"
                        size="txtRobotoRomanRegular16LightblueA700"
                      >
                        Picture1.jpeg
                      </Text>
                      <Text
                        className="text-base text-light_blue-A700"
                        size="txtRobotoRomanRegular16LightblueA700"
                      >
                        Picture2.jpeg
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[462px] inset-[0] justify-center m-auto w-[58%] md:w-full">
              <Img
                className="h-[462px] m-auto object-cover rounded w-full"
                src="images/img_pexelsphotoby.png"
                alt="pexelsphotoby_Two"
              />
              <Img
                className="absolute h-5 right-[3%] top-[5%] w-5"
                src="images/img_close.svg"
                alt="close"
              />
            </div>
          </div>
          <ChairmansDashboardPagination
            className="flex md:flex-col flex-row font-inter gap-2 items-center justify-start mt-[353px] mx-auto md:px-5 w-auto"
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

export default ClickingonanimagePage;
