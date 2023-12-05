import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, ReactTable, Text } from "components";
import ChairmansDashboardPagination from "components/ChairmansDashboardPagination";
import Header from "components/Header";

type TableRowType = {
  claimid: string;
  registrationnumOne: string;
  claimantname: string;
  claimtype: string;
  datereported: string;
  agentname: string;
};

const ClaimsPage: React.FC = () => {
  const tableData = React.useRef<TableRowType[]>([
    {
      claimid: "123AZR",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
      claimtype: "Accident",
      datereported: "12/08/2023",
      agentname: "Adams Wasi",
    },
    {
      claimid: "234QWE",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
      claimtype: "Accident",
      datereported: "15/08/2023",
      agentname: "Adams Wasi",
    },
    {
      claimid: "345ER",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
      claimtype: "Vandalism",
      datereported: "30/09/2023",
      agentname: "Adams Wasi",
    },
    {
      claimid: "456RT",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
      claimtype: "Vandalism",
      datereported: "01/10/2023",
      agentname: "Adams Wasi",
    },
    {
      claimid: "567TY",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
      claimtype: "Theft",
      datereported: "15/10/2023",
      agentname: "Adams Wasi",
    },
    {
      claimid: "456RT",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
      claimtype: "Vandalism",
      datereported: "01/10/2023",
      agentname: "Adams Wasi",
    },
    {
      claimid: "567TY",
      registrationnumOne: "KDK 234T",
      claimantname: "David Ndungu",
      claimtype: "Theft",
      datereported: "15/10/2023",
      agentname: "Adams Wasi",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("claimid", {
        cell: (info) => (
          <Text
            className="pb-2.5 sm:pl-5 pl-[35px] pt-[35px] text-base text-black-900"
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
      tableColumnHelper.accessor("registrationnumOne", {
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
            className="min-w-[215px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Registration number
          </Text>
        ),
      }),
      tableColumnHelper.accessor("claimantname", {
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
      tableColumnHelper.accessor("claimtype", {
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
            className="min-w-[190px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Claim type
          </Text>
        ),
      }),
      tableColumnHelper.accessor("datereported", {
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
            className="min-w-[168px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Date reported
          </Text>
        ),
      }),
      tableColumnHelper.accessor("agentname", {
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
            className="min-w-[164px] text-base text-black-900_7e"
            size="txtRobotoRomanRegular16Black9007e"
          >
            Agent name
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
          <div className="flex flex-col md:gap-10 gap-[353px] items-center justify-start max-w-[1181px] mt-[11px] mx-auto md:px-5 w-full">
            <div className="overflow-auto w-full">
              <ReactTable
                columns={tableColumns}
                data={tableData.current}
                rowClass={""}
                headerClass=""
              />
            </div>
            <ChairmansDashboardPagination
              className="flex flex-row font-inter gap-2 items-center justify-start w-auto"
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

export default ClaimsPage;
