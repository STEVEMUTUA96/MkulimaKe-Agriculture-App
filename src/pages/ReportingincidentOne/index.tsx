import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, ReactTable, Text } from "components";
import ChairmansDashboardPagination from "components/ChairmansDashboardPagination";
import Header from "components/Header";

type Table6RowType = {
  claimid: string;
  registrationnumOne: string;
  claimantname: string;
  claimtype: string;
  datereported: string;
};
type Table7RowType = {
  ty: string;
  kdk234TFour: string;
  davidndunguFour: string;
  theft: string;
  dateFour: string;
};

const ReportingincidentOnePage: React.FC = () => {
  const table6Data = React.useRef<Table6RowType[]>([
    {
      claimid: "123AZR",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
      claimtype: "Accident",
      datereported: "12/08/2023",
    },
    {
      claimid: "234QWE",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
      claimtype: "Accident",
      datereported: "15/08/2023",
    },
    {
      claimid: "345ER",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
      claimtype: "Vandalism",
      datereported: "30/09/2023",
    },
    {
      claimid: "456RT",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
      claimtype: "Vandalism",
      datereported: "01/10/2023",
    },
  ]);
  const table7Data = React.useRef<Table7RowType[]>([
    {
      ty: "456RT",
      kdk234TFour: "KDK 234T",
      davidndunguFour: "David Ndungu",
      theft: "Vandalism",
      dateFour: "01/10/2023",
    },
    {
      ty: "567TY",
      kdk234TFour: "KDK 234T",
      davidndunguFour: "David Ndungu",
      theft: "Theft",
      dateFour: "15/10/2023",
    },
  ]);
  const table6Columns = React.useMemo(() => {
    const table6ColumnHelper = createColumnHelper<Table6RowType>();
    return [
      table6ColumnHelper.accessor("claimid", {
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
      table6ColumnHelper.accessor("registrationnumOne", {
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
      table6ColumnHelper.accessor("claimantname", {
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
            className="min-w-[221px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Claimant name
          </Text>
        ),
      }),
      table6ColumnHelper.accessor("claimtype", {
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
            className="min-w-[220px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Claim type
          </Text>
        ),
      }),
      table6ColumnHelper.accessor("datereported", {
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
            className="min-w-[240px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Date reported
          </Text>
        ),
      }),
    ];
  }, []);
  const table7Columns = React.useMemo(() => {
    const table7ColumnHelper = createColumnHelper<Table7RowType>();
    return [
      table7ColumnHelper.accessor("ty", {
        cell: (info) => (
          <Text
            className="pb-[11px] sm:pl-5 pl-[35px] pt-[35px] text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[223px] sm:pl-5 pl-[35px] py-5 text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            567TY
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("kdk234TFour", {
        cell: (info) => (
          <Text
            className="pb-[11px] pt-[35px] text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[215px] py-5 text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            KDK 234T
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("davidndunguFour", {
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
            className="min-w-[221px] py-5 text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            David Ndungu
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("theft", {
        cell: (info) => (
          <Text
            className="pb-[11px] pt-[35px] text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[220px] py-5 text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            Theft
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("dateFour", {
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
            className="min-w-[240px] py-5 text-base text-black-900"
            size="txtRobotoRomanRegular16"
          >
            15/10/2023
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto gap-14 items-center justify-end mx-auto w-full">
        <Header className="bg-white-A700_33 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
        <div className="flex flex-col items-center justify-end max-w-[1119px] mx-auto md:px-5 w-full">
          <div className="h-[455px] sm:h-[516px] md:h-[650px] relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col gap-[11px] items-end justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[26px] items-start justify-end w-[42%] md:w-full">
                  <Button
                    className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[142px] text-base text-center"
                    shape="round"
                    color="teal_500"
                    size="md"
                    variant="fill"
                  >
                    Report incident
                  </Button>
                  <div className="bg-white-A700 flex flex-row items-center justify-center sm:mt-0 mt-1 p-1.5 rounded-[10px] w-[65%] sm:w-full">
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
                <div className="overflow-auto w-full">
                  <ReactTable
                    columns={table6Columns}
                    data={table6Data.current}
                    rowClass={""}
                    headerClass=""
                  />
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[17px] rounded-[16px] shadow-bs3 w-[71%]">
              <div className="flex flex-col items-start justify-start mb-[3px] w-[97%] md:w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="mt-[3px] text-black-900 text-xl"
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
                <div className="flex md:flex-col flex-row gap-[52px] items-center justify-start mt-[18px] w-[90%] md:w-full">
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
                      name="group1565"
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
                <div className="flex md:flex-col flex-row gap-[52px] items-center justify-start mt-[21px] w-[90%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Date reported
                    </Text>
                    <Input
                      name="group1564"
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
                <div className="bg-blue_gray-100_4c border border-black-900_b2 border-dashed flex flex-col gap-[9px] items-center justify-start mt-7 p-[61px] md:px-10 sm:px-5 rounded-lg w-[42%] md:w-full">
                  <Img
                    className="h-9 w-9"
                    src="images/img_folder.svg"
                    alt="close_One"
                  />
                  <Text
                    className="mb-[3px] text-base text-black-900"
                    size="txtRobotoRomanMedium16"
                  >
                    Drag files to upload
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-auto w-full">
            <ReactTable
              columns={table7Columns}
              data={table7Data.current}
              rowClass={""}
              headerClass="bg-white-A700"
            />
          </div>
          <ChairmansDashboardPagination
            className="flex flex-row font-inter gap-2 items-center justify-start mt-[353px] w-auto"
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

export default ReportingincidentOnePage;
