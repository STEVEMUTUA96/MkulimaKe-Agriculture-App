import React from "react";

import { Button, Img } from "components";

type ChairmansDashboardPaginationProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "one"
  | "buttononetext"
  | "buttontwotext"
  | "buttonthreetext"
  | "buttonninetext"
> &
  Partial<{
    one: string;
    buttononetext: string;
    buttontwotext: string;
    buttonthreetext: string;
    buttonninetext: string;
  }>;

const ChairmansDashboardPagination: React.FC<
  ChairmansDashboardPaginationProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-8 items-center justify-center w-8"
          shape="round"
          color="blue_gray_300_87"
          size="xs"
          variant="fill"
        >
          <Img className="h-6" src="images/img_arrowleft.svg" alt="arrowleft" />
        </Button>
        <div className="flex flex-col h-8 items-center justify-start w-8">
          {!!props?.one ? (
            <Button
              className="!text-deep_purple-A700 border border-deep_purple-A700 border-solid cursor-pointer font-bold font-sfprotext h-8 text-center text-sm w-8"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              {props?.one}
            </Button>
          ) : null}
        </div>
        {!!props?.buttononetext ? (
          <Button
            className="border border-gray-300 border-solid cursor-pointer font-bold font-inter h-8 text-center text-sm w-8"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            {props?.buttononetext}
          </Button>
        ) : null}
        {!!props?.buttontwotext ? (
          <Button
            className="border border-gray-300 border-solid cursor-pointer font-bold font-inter h-8 text-center text-sm w-8"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            {props?.buttontwotext}
          </Button>
        ) : null}
        {!!props?.buttonthreetext ? (
          <Button
            className="border border-gray-300 border-solid cursor-pointer font-bold font-inter h-8 text-center text-sm w-8"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            {props?.buttonthreetext}
          </Button>
        ) : null}
        {!!props?.buttonninetext ? (
          <Button
            className="border border-gray-300 border-solid cursor-pointer font-bold font-inter h-8 text-center text-sm w-8"
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            {props?.buttonninetext}
          </Button>
        ) : null}
        <Button
          className="border border-gray-300 border-solid flex h-8 items-center justify-center w-8"
          shape="round"
          color="white_A700"
          size="xs"
          variant="fill"
        >
          <Img className="h-6" src="images/img_send.svg" alt="arrowright" />
        </Button>
      </div>
    </>
  );
};

ChairmansDashboardPagination.defaultProps = {};

export default ChairmansDashboardPagination;
