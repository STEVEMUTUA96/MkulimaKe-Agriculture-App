import React from "react";

import { Button, Img, Input, List, Text } from "components";
import ChairmansDashboardPagination from "components/ChairmansDashboardPagination";
import Header from "components/Header";

const ReportincidentPage: React.FC = () => {
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
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1066px] mt-[11px] mx-auto md:px-5 w-full">
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
            <Text
              className="md:ml-[0] ml-[113px] text-base text-black-900_7e"
              size="txtRobotoRomanRegular16Black9007e"
            >
              Claim type
            </Text>
            <Text
              className="md:ml-[0] ml-[114px] text-base text-black-900_7e"
              size="txtRobotoRomanRegular16Black9007e"
            >
              Date reported
            </Text>
            <Text
              className="md:ml-[0] ml-[70px] text-base text-black-900_7e"
              size="txtRobotoRomanRegular16Black9007e"
            >
              Agent name
            </Text>
          </div>
          <div className="sm:h-[1882px] h-[558px] md:h-[769px] max-w-[1181px] mt-[18px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <List
                className="flex flex-col gap-4 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-[19px] rounded-[10px] w-full">
                  <Text
                    className="sm:ml-[0] ml-[18px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    123AZR
                  </Text>
                  <Text
                    className="ml-32 sm:ml-[0] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    KDK 234T
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[143px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    David Ndungu
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[121px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Accident
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[127px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    12/08/2023
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Adams Wasi
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-[19px] rounded-[10px] w-full">
                  <Text
                    className="sm:ml-[0] ml-[18px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    234QWE
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[123px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    KDK 234T
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[143px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    David Ndungu
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[121px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Accident
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[127px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    15/08/2023
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Adams Wasi
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-[19px] rounded-[10px] w-full">
                  <Text
                    className="sm:ml-[0] ml-[18px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    345ER
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[139px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    KDK 234T
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[143px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    David Ndungu
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[121px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Vandalism
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[114px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    30/09/2023
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Adams Wasi
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-[19px] rounded-[10px] w-full">
                  <Text
                    className="sm:ml-[0] ml-[18px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    456RT
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[139px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    KDK 234T
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[143px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    David Ndungu
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[121px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Vandalism
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[114px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    01/10/2023
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Adams Wasi
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-[19px] rounded-[10px] w-full">
                  <Text
                    className="sm:ml-[0] ml-[18px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    567TY
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[138px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    KDK 234T
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[143px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    David Ndungu
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[121px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Theft
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[152px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    15/10/2023
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Adams Wasi
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-[19px] rounded-[10px] w-full">
                  <Text
                    className="sm:ml-[0] ml-[18px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    456RT
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[139px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    KDK 234T
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[143px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    David Ndungu
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[121px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Vandalism
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[114px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    01/10/2023
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Adams Wasi
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-[19px] rounded-[10px] w-full">
                  <Text
                    className="sm:ml-[0] ml-[18px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    567TY
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[138px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    KDK 234T
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[143px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    David Ndungu
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[121px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Theft
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[152px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    15/10/2023
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Adams Wasi
                  </Text>
                </div>
              </List>
            </div>
            <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-[15px] right-[14%] rounded-[16px] shadow-bs3 w-[67%]">
              <div className="flex flex-col items-start justify-start mb-[30px] w-[97%] md:w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="mt-[5px] text-black-900 text-xl"
                    size="txtRobotoRomanMedium20"
                  >
                    Report an incident
                  </Text>
                  <Img
                    className="h-5 w-5"
                    src="images/img_close.svg"
                    alt="close"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[52px] items-center justify-start mt-[18px] w-[89%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Claimant name
                    </Text>
                    <Input
                      name="rectangleTwo"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-black-900 border-solid flex h-[35px] mt-1 w-full"
                      shape="round"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Claim type
                    </Text>
                    <Input
                      name="group1575"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-black-900 border-solid flex mt-0.5 w-full"
                      suffix={
                        <Img
                          className="h-5 ml-[35px] my-auto"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[52px] items-center justify-start mt-[21px] w-[89%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Date reported
                    </Text>
                    <Input
                      name="group1573"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-black-900 border-solid flex mt-0.5 w-full"
                      suffix={
                        <Img
                          className="h-5 ml-[35px] my-auto"
                          src="images/img_calendar.svg"
                          alt="calendar"
                        />
                      }
                      shape="round"
                      size="xs"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Write a description.
                    </Text>
                    <Input
                      name="rectangleTwentyThree"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-black-900_33 border-solid flex h-[35px] mt-0.5 w-full"
                      shape="round"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-[21px] w-[41%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Agent name
                  </Text>
                  <Input
                    name="rectangleTwentyThree_One"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-black-900_33 border-solid flex h-[35px] mt-0.5 w-full"
                    shape="round"
                  ></Input>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[190px] items-center justify-end mt-7 p-[61px] md:px-10 sm:px-5 w-[41%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group1574.svg')" }}
                >
                  <div className="flex flex-col gap-[9px] items-center justify-start mt-0.5 w-[79%] md:w-full">
                    <Img
                      className="h-9 w-9"
                      src="images/img_folder.svg"
                      alt="close_One"
                    />
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Drag files to upload
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ChairmansDashboardPagination
            className="flex md:flex-col flex-row font-inter gap-2 items-center justify-start mt-[311px] mx-auto md:px-5 w-auto"
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

export default ReportincidentPage;
