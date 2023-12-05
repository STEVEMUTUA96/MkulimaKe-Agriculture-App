import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import Header1 from "components/Header1";

type Table5RowType = {
  registrationnumOne: string;
  policystatus: string;
  owner: string;
  route: string;
  renewalcountdowOne: string;
};

const LoginThreePage: React.FC = () => {
  const table5Data = React.useRef<Table5RowType[]>([
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Renewed",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      renewalcountdowOne: "12 days",
    },
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Renewed",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      renewalcountdowOne: "12 days",
    },
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Overdue",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      renewalcountdowOne: "12 days",
    },
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Renewed",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      renewalcountdowOne: "12 days",
    },
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Overdue",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      renewalcountdowOne: "12 days",
    },
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Renewed",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      renewalcountdowOne: "12 days",
    },
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Renewed",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      renewalcountdowOne: "12 days",
    },
  ]);
  const table5Columns = React.useMemo(() => {
    const table5ColumnHelper = createColumnHelper<Table5RowType>();
    return [
      table5ColumnHelper.accessor("registrationnumOne", {
        cell: (info) => (
          <div className="flex flex-row gap-[15px] items-start justify-start p-1.5">
            <div className="bg-gray-600_26 h-[30px] mt-[27px] rounded-[10px] w-[30px]"></div>
            <Text
              className="mt-8 text-base text-black-900"
              size="txtRobotoRomanRegular16"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[263px] sm:pl-5 pl-[35px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Registration number
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("policystatus", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-2.5 py-2.5">
            <Button
              className="cursor-pointer min-w-[61px] mr-[113px] mt-[26px] rounded-md text-center text-xs"
              shape="round"
              color="light_green_500_99"
              size="xs"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[185px] text-base text-black-900_7e text-center"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Policy status
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("owner", {
        cell: (info) => (
          <Text
            className="pb-2.5 pt-[35px] text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[171px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Owner
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("route", {
        cell: (info) => (
          <Text
            className="pb-3 pt-[35px] text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[188px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Route
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("renewalcountdowOne", {
        cell: (info) => (
          <Text
            className="pb-2.5 pt-[35px] text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[177px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Renewal countdown
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-start mx-auto pb-[108px] w-full">
        <div className="flex flex-col gap-[21px] items-center justify-start w-full">
          <Header1 className="bg-white-A700_33 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
          <div className="flex flex-col gap-[15px] items-center justify-start max-w-[1336px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-[18px] rounded-[16px] shadow-bs1 w-2/5 md:w-full">
                <div className="flex flex-col gap-[39px] justify-start mb-[62px] w-[90%] md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtRobotoRomanMedium20"
                  >
                    Overview
                  </Text>
                  <div className="flex flex-row items-center justify-between md:ml-[0] ml-[45px] w-[90%] md:w-full">
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
                        Active policies
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
                        Total cars
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-[18px] rounded-[16px] shadow-bs1 w-[54%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-2.5 pb-[9px] pr-[9px] w-[94%] md:w-full">
                  <div className="flex flex-row gap-[17px] items-center justify-start w-1/4 md:w-full">
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
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
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
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
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
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[30px] w-full">
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
            <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-[97%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start mb-[516px] p-3 rounded-[16px] shadow-bs1 w-[21%] md:w-full">
                <Img
                  className="h-[52px] w-[52px]"
                  src="images/img_clock.svg"
                  alt="user"
                />
                <div className="flex flex-col items-center justify-start mb-[26px]">
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
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[31px] w-[77%] md:w-full">
                <Input
                  name="frameTwentyFive"
                  placeholder="Vehicles"
                  className="font-medium leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                  wrapClassName="rounded-[16px] w-[97%]"
                  size="md"
                ></Input>
                <div className="flex sm:flex-col flex-row gap-6 items-start justify-end md:ml-[0] ml-[579px] mt-[30px] w-[42%] md:w-full">
                  <Button
                    className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[81px] text-base text-center"
                    shape="round"
                    color="teal_500"
                    size="md"
                    variant="fill"
                  >
                    Renew
                  </Button>
                  <div className="bg-white-A700 flex flex-row items-center justify-center mb-1 p-1.5 rounded-[10px] w-3/4 sm:w-full">
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
                <div className="overflow-auto mt-6 w-full">
                  <ReactTable
                    columns={table5Columns}
                    data={table5Data.current}
                    rowClass={""}
                    headerClass=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginThreePage;
