import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, ReactTable, Text } from "components";

type Table2RowType = {
  registrationnumOne: string;
  model: string;
  owner: string;
  route: string;
  rating: string;
  renewalcountdowOne: string;
};

const LoginThirteenPage: React.FC = () => {
  const table2Data = React.useRef<Table2RowType[]>([
    {
      registrationnumOne: "KDK 234T",
      model: "Upcoming renewal",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      rating: "images/img_group12.svg",
      renewalcountdowOne: "12 days",
    },
    {
      registrationnumOne: "KDK 234T",
      model: "Upcoming renewal",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      rating: "images/img_map.svg",
      renewalcountdowOne: "08 days",
    },
    {
      registrationnumOne: "KDK 234T",
      model: "Upcoming renewal",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      rating: "images/img_group12_gray_900.svg",
      renewalcountdowOne: "21 days",
    },
    {
      registrationnumOne: "KDK 234T",
      model: "Upcoming renewal",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      rating: "images/img_map.svg",
      renewalcountdowOne: "3 months",
    },
    {
      registrationnumOne: "KDK 234T",
      model: "Upcoming renewal",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      rating: "images/img_map.svg",
      renewalcountdowOne: "12 days",
    },
  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper<Table2RowType>();
    return [
      table2ColumnHelper.accessor("registrationnumOne", {
        cell: (info) => (
          <div className="flex flex-row gap-[15px] items-start justify-start p-2">
            <Button
              className="flex h-[30px] items-center justify-center mt-[21px] rounded-[10px] w-[30px]"
              color="teal_500"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            </Button>
            <Text
              className="mt-[26px] text-base text-black-900"
              size="txtRobotoRomanRegular16"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[303px] sm:pl-5 pl-[35px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Registration number
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("model", {
        cell: (info) => (
          <Text
            className="pb-3 pt-8 rounded-md text-black-900 text-center text-xs"
            size="txtRobotoRomanRegular12"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[180px] text-base text-black-900_7e text-center"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Model
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("owner", {
        cell: (info) => (
          <Text
            className="pb-[13px] pt-[35px] text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[181px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Owner
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("route", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[34px] text-base text-black-900"
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
            Route
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("rating", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-[11px] py-[11px]">
            <Img className="h-6 mt-[21px]" alt="close" src={info?.getValue()} />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[181px] text-base text-black-900_7e text-center"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Rating
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("renewalcountdowOne", {
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
            className="min-w-[258px] text-base text-black-900_7e"
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
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-start mx-auto pb-[177px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="bg-white-A700_33 flex flex-row items-center justify-center p-4 shadow-bs w-full">
            <div className="flex flex-row items-start justify-center md:px-5 w-[17%]">
              <Text
                className="mt-[3px] text-base text-black-900"
                size="txtRobotoRomanMedium16"
              >
                Home
              </Text>
              <Text
                className="ml-[37px] mt-[3px] text-base text-black-900"
                size="txtRobotoRomanMedium16"
              >
                Notifications
              </Text>
              <Img
                className="h-7 ml-[30px] w-7"
                src="images/img_riaccountcircleline.svg"
                alt="riaccountcircle"
              />
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[622px] mt-9 text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtRobotoRomanMedium24"
          >
            Vehicles list
          </Text>
          <div className="flex flex-col items-center justify-start max-w-7xl mt-[67px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-3/4 md:w-full">
                <Text
                  className="text-base text-teal-500"
                  size="txtRobotoRomanRegular16Teal500"
                >
                  Home{" "}
                </Text>
                <Img
                  className="h-5 ml-2.5 md:ml-[0] w-5"
                  src="images/img_expandmore.svg"
                  alt="television"
                />
                <Text
                  className="ml-2.5 md:ml-[0] text-base text-teal-500"
                  size="txtRobotoRomanRegular16Teal500"
                >
                  Vehicles
                </Text>
                <Button
                  className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[102px] md:ml-[0] ml-[713px] md:mt-0 mt-0.5 text-base text-center"
                  shape="round"
                  color="teal_500"
                  size="md"
                  variant="fill"
                >
                  Renew all
                </Button>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-row items-center justify-center md:mt-0 my-[3px] p-1.5 rounded-[10px] w-[24%] md:w-full">
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
            <div className="overflow-auto mt-[15px] w-full">
              <ReactTable
                columns={table2Columns}
                data={table2Data.current}
                rowClass={""}
                headerClass=""
              />
            </div>
            <div className="bg-white-A700 h-[60px] rounded-[10px] w-full"></div>
            <div className="bg-white-A700 h-[60px] mt-[92px] rounded-[10px] w-full"></div>
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[168px] p-2 rounded-[10px] w-full">
              <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
              <Text
                className="md:ml-[0] ml-[15px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                KDK 234T
              </Text>
              <Button
                className="cursor-pointer min-w-[61px] md:ml-[0] ml-[178px] md:mt-0 my-2.5 rounded-md text-center text-xs"
                shape="round"
                color="light_green_500_99"
                size="xs"
                variant="fill"
              >
                Renewed
              </Button>
              <Text
                className="md:ml-[0] ml-[119px] text-base text-black-900"
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
              <Img
                className="h-6 md:ml-[0] ml-[45px]"
                src="images/img_map.svg"
                alt="signal_Three"
              />
              <Text
                className="md:ml-[0] ml-[131px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                3 months
              </Text>
            </div>
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-4 p-2 rounded-[10px] w-full">
              <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
              <Text
                className="md:ml-[0] ml-[15px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                KDK 234T
              </Text>
              <Button
                className="cursor-pointer min-w-[61px] md:ml-[0] ml-[178px] md:mt-0 my-2.5 rounded-md text-center text-xs"
                shape="round"
                color="light_green_500_99"
                size="xs"
                variant="fill"
              >
                Renewed
              </Button>
              <Text
                className="md:ml-[0] ml-[119px] text-base text-black-900"
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
              <Img
                className="h-6 md:ml-[0] ml-[45px]"
                src="images/img_map.svg"
                alt="signal_Four"
              />
              <Text
                className="md:ml-[0] ml-[131px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                3 months
              </Text>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end mb-[5px] md:ml-[0] ml-[101px] md:mt-0 mt-4 p-[3px] w-[4%] md:w-full">
                <div className="bg-red-600 h-4 md:ml-[0] ml-[9px] rounded-[50%] w-4"></div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-4 p-2 rounded-[10px] w-full">
              <div className="bg-gray-600_26 h-[30px] md:mt-0 my-[7px] rounded-[10px] w-[30px]"></div>
              <Text
                className="md:ml-[0] ml-[15px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                KDK 234T
              </Text>
              <Button
                className="cursor-pointer min-w-[61px] md:ml-[0] ml-[178px] md:mt-0 my-2.5 rounded-md text-center text-xs"
                shape="round"
                color="light_green_500_99"
                size="xs"
                variant="fill"
              >
                Renewed
              </Button>
              <Text
                className="md:ml-[0] ml-[119px] text-base text-black-900"
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
              <Img
                className="h-6 md:ml-[0] ml-[45px]"
                src="images/img_map.svg"
                alt="signal_Five"
              />
              <Text
                className="md:ml-[0] ml-[131px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                3 months
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginThirteenPage;
