import React from "react";

import { Button, Img, List, Text } from "components";
import ChairmansDashboardPagination from "components/ChairmansDashboardPagination";
import Header1 from "components/Header1";

const NotificationsOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-start mx-auto pb-[169px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="bg-white-A700_33 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
          <Text
            className="mt-[54px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtRobotoRomanSemiBold24"
          >
            Notifications
          </Text>
          <div className="flex flex-col items-start justify-start max-w-7xl mt-[15px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-[18px] items-end justify-between w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row md:gap-10 items-start justify-between w-[94%] md:w-full">
                <div className="flex flex-row gap-2.5 items-start justify-between w-[15%] sm:w-full">
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
                <div className="bg-white-A700 flex flex-row items-center justify-center sm:mt-0 mt-2.5 p-1.5 rounded-[10px] w-1/4 sm:w-full">
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
              <div className="flex md:flex-1 flex-row gap-3 items-center justify-between md:mt-0 mt-[22px] w-[5%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Sort
                </Text>
                <Img
                  className="h-6"
                  src="images/img_mdisort.svg"
                  alt="mdisort"
                />
              </div>
            </div>
            <List
              className="flex flex-col gap-4 items-center mt-3 w-full"
              orientation="vertical"
            >
              <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-2 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[35px] text-base text-black-900"
                  size="txtRobotoRomanBold16"
                >
                  Receipt
                </Text>
                <div className="bg-teal-500_01 h-2.5 ml-11 md:ml-[0] md:mt-0 my-[17px] rounded-[50%] w-2.5"></div>
                <Text
                  className="ml-2 md:ml-[0] text-base text-black-900"
                  size="txtRobotoRomanBold16"
                >
                  Payment for KBX 123A is successful. We have emailed to you the
                  receipt. Thank you for choosing us for your...
                </Text>
                <Text
                  className="md:ml-[0] ml-[155px] text-base text-black-900"
                  size="txtRobotoRomanSemiBold16"
                >
                  3 hrs ago
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-2 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[35px] text-base text-black-900"
                  size="txtRobotoRomanBold16"
                >
                  Reminder
                </Text>
                <div className="bg-teal-500_01 h-2.5 md:ml-[0] ml-[29px] md:mt-0 my-[17px] rounded-[50%] w-2.5"></div>
                <Text
                  className="md:ml-[0] ml-[15px] text-base text-black-900"
                  size="txtRobotoRomanBold16"
                >
                  Reminder: Policy renewal for Car DEF-456 is due in 7 days.
                  Renewing your policy is quick and easy. Simply cl...
                </Text>
                <Text
                  className="md:ml-[0] ml-[149px] text-base text-black-900"
                  size="txtRobotoRomanSemiBold16"
                >
                  3 hrs ago
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-2 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[35px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Receipt
                </Text>
                <Text
                  className="md:ml-[0] ml-[63px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Payment for KBX 123A is successful. We have emailed to you the
                  receipt. Thank you for choosing us for your...
                </Text>
                <Text
                  className="md:ml-[0] ml-[169px] text-base text-black-900"
                  size="txtRobotoRomanSemiBold16"
                >
                  3 hrs ago
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-2 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[35px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Reminder
                </Text>
                <Text
                  className="md:ml-[0] ml-[55px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Reminder: Policy renewal for Car DEF-456 is due in 7 days.
                  Renewing your policy is quick and easy. Simply cl...
                </Text>
                <Text
                  className="md:ml-[0] ml-[166px] text-base text-black-900"
                  size="txtRobotoRomanSemiBold16"
                >
                  3 hrs ago
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-2 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[35px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Receipt
                </Text>
                <Text
                  className="md:ml-[0] ml-[63px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Payment for KBX 123A is successful. We have emailed to you the
                  receipt. Thank you for choosing us for your...
                </Text>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[169px]">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    3 hrs ago
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-2 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[35px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Reminder
                </Text>
                <Text
                  className="md:ml-[0] ml-[55px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Reminder: Policy renewal for Car DEF-456 is due in 7 days.
                  Renewing your policy is quick and easy. Simply cl...
                </Text>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[166px]">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanSemiBold16"
                  >
                    3 hrs ago
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-2 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[35px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Receipt
                </Text>
                <Text
                  className="md:ml-[0] ml-[63px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Payment for KBX 123A is successful. We have emailed to you the
                  receipt. Thank you for choosing us for your...
                </Text>
                <Text
                  className="md:ml-[0] ml-[169px] text-base text-black-900"
                  size="txtRobotoRomanSemiBold16"
                >
                  3 hrs ago
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-2 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[35px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Reminder
                </Text>
                <Text
                  className="md:ml-[0] ml-[55px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Reminder: Policy renewal for Car DEF-456 is due in 7 days.
                  Renewing your policy is quick and easy. Simply cl...
                </Text>
                <Text
                  className="md:ml-[0] ml-[166px] text-base text-black-900"
                  size="txtRobotoRomanSemiBold16"
                >
                  3 hrs ago
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-2 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[35px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Receipt
                </Text>
                <Text
                  className="md:ml-[0] ml-[63px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Payment for KBX 123A is successful. We have emailed to you the
                  receipt. Thank you for choosing us for your...
                </Text>
                <Text
                  className="md:ml-[0] ml-[169px] text-base text-black-900"
                  size="txtRobotoRomanSemiBold16"
                >
                  3 hrs ago
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-2 rounded-[10px] w-full">
                <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
                <Text
                  className="md:ml-[0] ml-[35px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Reminder
                </Text>
                <Text
                  className="md:ml-[0] ml-[55px] text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Reminder: Policy renewal for Car DEF-456 is due in 7 days.
                  Renewing your policy is quick and easy. Simply cl...
                </Text>
                <Text
                  className="md:ml-[0] ml-[166px] text-base text-black-900"
                  size="txtRobotoRomanSemiBold16"
                >
                  3 hrs ago
                </Text>
              </div>
            </List>
            <ChairmansDashboardPagination
              className="flex flex-row font-inter gap-2 items-center justify-start md:ml-[0] ml-[470px] mt-[46px] w-auto"
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

export default NotificationsOnePage;
