import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, ReactTable, Text } from "components";
import ChairmansDashboardPagination from "components/ChairmansDashboardPagination";
import Header from "components/Header";

type Table1RowType = {
  claimid: string;
  registrationnumOne: string;
  claimantname: string;
};

const ReportingincidentPage: React.FC = () => {
  const table1Data = React.useRef<Table1RowType[]>([
    {
      claimid: "123AZR",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
    },
    {
      claimid: "234QWE",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
    },
    {
      claimid: "345ER",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
    },
    {
      claimid: "456RT",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
    },
    {
      claimid: "567TY",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
    },
    {
      claimid: "456RT",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
    },
    {
      claimid: "567TY",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
    },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();
    return [
      table1ColumnHelper.accessor("claimid", {
        cell: (info) => (
          <Text
            className="pb-[9px] sm:pl-5 pl-[35px] pt-[35px] text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[223px] sm:pl-5 pl-[35px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Claim ID
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("registrationnumOne", {
        cell: (info) => (
          <Text
            className="pb-[9px] pt-[35px] text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[215px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Registration number
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("claimantname", {
        cell: (info) => (
          <Text
            className="pb-2 pt-[35px] text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[150px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Claimant name
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-end mx-auto w-full">
        <div className="flex flex-col justify-end w-full">
          <Header className="bg-white-A700_33 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
          <div className="flex md:flex-col flex-row gap-[26px] items-start justify-start md:ml-[0] ml-[270px] mr-[702px] mt-14 md:px-5 w-[33%] md:w-full">
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
          <div className="flex md:flex-col flex-row gap-7 items-end justify-end md:ml-[0] ml-[150px] mr-[86px] mt-[11px] md:px-5 w-[84%] md:w-full">
            <div className="overflow-auto w-[49%]">
              <ReactTable
                columns={table1Columns}
                data={table1Data.current}
                rowClass={""}
                headerClass=""
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-end md:mt-0 mt-[39px] p-4 rounded-[10px] w-[49%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[35px] mt-10 w-[89%] md:w-full">
                <div className="flex flex-row items-center justify-between w-1/2 md:w-full">
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
                <div className="flex flex-row gap-[38px] items-center justify-start mt-[13px] w-[53%] md:w-full">
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
                <div className="flex flex-row gap-[78px] items-start justify-start mt-[13px] w-3/5 md:w-full">
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
                <div className="flex flex-row items-start justify-between mt-3.5 w-[54%] md:w-full">
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
                <div className="flex flex-row gap-[88px] items-start justify-start mt-[15px] w-[56%] md:w-full">
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
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-3.5 w-full">
                  <Text
                    className="text-base text-gray-600"
                    size="txtRobotoRomanRegular16Gray600"
                  >
                    Description
                  </Text>
                  <Text
                    className="text-base text-teal-500"
                    size="txtRobotoRomanMedium16Teal500"
                  >
                    <>
                      Accident. Collided with another car on the <br />
                      loitoktok highway....
                    </>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-start md:ml-[0] ml-[25px] mt-[51px] w-[76%] md:w-full">
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
                <div className="flex flex-row items-center justify-between md:ml-[0] ml-[25px] mt-[11px] w-3/5 md:w-full">
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

export default ReportingincidentPage;
