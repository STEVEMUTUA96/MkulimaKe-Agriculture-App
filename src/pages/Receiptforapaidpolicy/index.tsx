import React from "react";

import { Button, Img, List, Text } from "components";
import ChairmansDashboardPagination from "components/ChairmansDashboardPagination";
import Header from "components/Header";

const ReceiptforapaidpolicyPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-start mx-auto pb-[158px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-white-A700_33 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
          <Text
            className="mt-[54px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtRobotoRomanSemiBold24"
          >
            Notifications
          </Text>
          <div className="flex flex-col items-start justify-start max-w-[1317px] mt-[15px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-6 items-end justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[38px] items-start justify-start w-1/2 md:w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-[28%] md:w-full">
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
                    Notifications
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-4 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-1 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[11px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanBold16"
                    >
                      Receipt
                    </Text>
                    <div className="bg-teal-500_01 h-2.5 md:ml-[0] ml-[38px] md:mt-0 my-[21px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="md:ml-[0] ml-[13px] text-base text-black-900"
                      size="txtRobotoRomanBold16"
                    >
                      Payment for KBX 123A is successful. We have emailed the
                      reci...
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-1 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] sm:mt-0 my-[11px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanBold16"
                    >
                      Reminder
                    </Text>
                    <div className="bg-teal-500_01 h-2.5 sm:mt-0 my-[21px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="mr-2.5 text-base text-black-900"
                      size="txtRobotoRomanBold16"
                    >
                      Reminder: Policy renewal for Car DEF-456 is due in 7
                      days.You...
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-1 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[11px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Receipt
                    </Text>
                    <div className="bg-teal-500_01 h-2.5 md:ml-[0] ml-[35px] md:mt-0 my-[21px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Payment for KBX 123A is successful. We have emailed to
                      you...
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-1 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[11px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Receipt
                    </Text>
                    <div className="bg-teal-500_01 h-2.5 md:ml-[0] ml-[35px] md:mt-0 my-[21px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Payment for KBX 123A is successful. We have emailed to
                      you...
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-1 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[11px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Receipt
                    </Text>
                    <div className="bg-teal-500_01 h-2.5 md:ml-[0] ml-[35px] md:mt-0 my-[21px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Payment for KBX 123A is successful. We have emailed to
                      you...
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-1 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[11px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Receipt
                    </Text>
                    <div className="bg-teal-500_01 h-2.5 md:ml-[0] ml-[35px] md:mt-0 my-[21px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Payment for KBX 123A is successful. We have emailed to
                      you...
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-1 rounded-[10px] w-full">
                    <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[11px] rounded-[10px] w-[30px]"></div>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Receipt
                    </Text>
                    <div className="bg-teal-500_01 h-2.5 md:ml-[0] ml-[35px] md:mt-0 my-[21px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Payment for KBX 123A is successful. We have emailed to
                      you...
                    </Text>
                  </div>
                </List>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-1.5 justify-start mb-[3px] md:mt-0 mt-[58px] p-3 rounded-[16px] w-[49%] md:w-full">
                <Img
                  className="h-5 md:ml-[0] ml-[595px] w-5"
                  src="images/img_close.svg"
                  alt="close"
                />
                <div className="flex flex-col items-start justify-start ml-3 md:ml-[0] mr-[46px] w-[91%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Receipt
                    </Text>
                    <Text
                      className="text-base text-gray-600"
                      size="txtRobotoRomanRegular16Gray600"
                    >
                      14:08 (2 hours ago)
                    </Text>
                  </div>
                  <Text
                    className="mt-[11px] text-base text-black-900 underline"
                    size="txtRobotoRomanMedium16"
                  >
                    Subject: Policy renewal for KBX 123Z is Complete.
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-[35px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    <>
                      We are delighted to inform you that your insurance policy
                      for the <br />
                      following vehicle has been successfully renewed:
                    </>
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-[21px] w-[45%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Vehicle :
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanSemiBold16"
                    >
                      KBX 123Z
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[73px] items-start justify-start mt-[9px] w-[44%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Policy number
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanSemiBold16"
                    >
                      ABCX134
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[53px] items-start justify-start mt-[7px] w-[44%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Payment amount
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanSemiBold16"
                    >
                      Kes 1200
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[76px] items-start justify-start mt-[7px] w-[46%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Payment date
                    </Text>
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanSemiBold16"
                    >
                      13.09.2023
                    </Text>
                  </div>
                  <Text
                    className="leading-[20.00px] mt-[27px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    <>
                      Your insurance policy is now up to date, ensuring
                      continuous <br />
                      coverage for your valuable asset.
                    </>
                  </Text>
                  <Text
                    className="mt-[34px] text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Download sticker here
                  </Text>
                  <div className="flex flex-row gap-1.5 items-end justify-start mt-2 w-[31%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_teenyiconspdfsolid.svg"
                      alt="teenyiconspdfso"
                    />
                    <Text
                      className="mt-[5px] text-base text-light_blue-A700"
                      size="txtRobotoRomanRegular16LightblueA700"
                    >
                      KBX123ZSticker.pdf
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[73px] md:ml-[0] ml-[239px] mt-3.5 text-base text-center"
                    shape="round"
                    color="deep_orange_500"
                    size="md"
                    variant="fill"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
            <List
              className="flex flex-col gap-4 mt-4 w-1/2"
              orientation="vertical"
            >
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-1 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[11px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[19px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Receipt
                </Text>
                <div className="bg-teal-500_01 h-2.5 md:ml-[0] ml-[35px] md:mt-0 my-[21px] rounded-[50%] w-2.5"></div>
                <Text
                  className="md:ml-[0] ml-[15px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Payment for KBX 123A is successful. We have emailed to you...
                </Text>
              </div>
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-1 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[11px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[19px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Receipt
                </Text>
                <div className="bg-teal-500_01 h-2.5 md:ml-[0] ml-[35px] md:mt-0 my-[21px] rounded-[50%] w-2.5"></div>
                <Text
                  className="md:ml-[0] ml-[15px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Payment for KBX 123A is successful. We have emailed to you...
                </Text>
              </div>
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-1 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[11px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[19px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Receipt
                </Text>
                <div className="bg-teal-500_01 h-2.5 md:ml-[0] ml-[35px] md:mt-0 my-[21px] rounded-[50%] w-2.5"></div>
                <Text
                  className="md:ml-[0] ml-[15px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Payment for KBX 123A is successful. We have emailed to you...
                </Text>
              </div>
            </List>
            <ChairmansDashboardPagination
              className="flex flex-row font-inter gap-2 items-center justify-start md:ml-[0] ml-[470px] mt-[57px] w-auto"
              one="1"
              buttononetext="2"
              buttontwotext="..."
              buttonthreetext="9"
              buttonninetext="10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiptforapaidpolicyPage;
