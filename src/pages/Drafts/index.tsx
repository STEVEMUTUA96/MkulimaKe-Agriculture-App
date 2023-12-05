import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, ReactTable, Text } from "components";

type Table3RowType = {
  registrationnumOne: string;
  policystatus: string;
  owner: string;
  route: string;
  rating: string;
  renewalcountdowOne: string;
};

const DraftsPage: React.FC = () => {
  const table3Data = React.useRef<Table3RowType[]>([
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Upcoming renewal",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      rating: "images/img_group12.svg",
      renewalcountdowOne: "12 days",
    },
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Upcoming renewal",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      rating: "images/img_map.svg",
      renewalcountdowOne: "0 days",
    },
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Upcoming renewal",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      rating: "images/img_star.svg",
      renewalcountdowOne: "2 months",
    },
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Upcoming renewal",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      rating: "images/img_group12_gray_900.svg",
      renewalcountdowOne: "21 days",
    },
    {
      registrationnumOne: "KDK 234T",
      policystatus: "Upcoming renewal",
      owner: "David Ndungu",
      route: "NAIROBI - RONGAI",
      rating: "images/img_map.svg",
      renewalcountdowOne: "3 months",
    },
  ]);
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper<Table3RowType>();
    return [
      table3ColumnHelper.accessor("registrationnumOne", {
        cell: (info) => (
          <div className="flex flex-row gap-[15px] items-start justify-start p-2">
            <div className="bg-gray-600_26 h-[30px] mt-[21px] rounded-[10px] w-[30px]"></div>
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
      table3ColumnHelper.accessor("policystatus", {
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
            Policy status
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("owner", {
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
      table3ColumnHelper.accessor("route", {
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
      table3ColumnHelper.accessor("rating", {
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
      table3ColumnHelper.accessor("renewalcountdowOne", {
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
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[1525px] justify-start mx-auto p-[88px] md:px-10 sm:px-5 w-full">
        <Text
          className="mt-[75px] text-black-900 text-xs"
          size="txtInterRegular12"
        >
          <>
            Create an ability to create a chairman - and enter referal code for
            chairman.
            <br />
            Cancelling button on the 3 menu.
          </>
        </Text>
        <div className="flex flex-col font-roboto md:gap-10 gap-[683px] items-end mb-28 mr-[703px] md:pl-10 sm:pl-5 pl-[1706px] w-[83%] md:w-full">
          <div className="bg-white-A700 flex flex-col md:gap-10 gap-[63px] justify-start p-[18px] rounded-[16px] shadow-bs1 w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtRobotoRomanMedium20"
            >
              Vehicles
            </Text>
            <div className="overflow-auto mb-[88px] md:ml-[0] ml-[179px] mr-[119px] w-[82%]">
              <ReactTable
                columns={table3Columns}
                data={table3Data.current}
                rowClass={""}
                headerClass=""
              />
            </div>
          </div>
          <div className="bg-white-A700 flex flex-row items-start justify-start p-5 rounded-[16px] shadow-bs1 w-[16%] md:w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtRobotoRomanRegular20"
            >
              Rating
            </Text>
            <Text
              className="mb-0.5 mt-[27px] md:text-5xl text-[74px] text-black-900"
              size="txtRobotoRomanSemiBold74"
            >
              3
            </Text>
            <Img
              className="h-[50px] ml-[3px] mt-[47px] w-[50px]"
              src="images/img_star.svg"
              alt="signal_Three"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DraftsPage;
