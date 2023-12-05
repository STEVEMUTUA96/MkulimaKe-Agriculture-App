import React from "react";

import { Img, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="ml-10 md:ml-[0] md:mt-0 my-[15px] text-2xl md:text-[22px] text-teal-500 sm:text-xl"
          size="txtRobotoRomanBold24"
        >
          GURUMESA
        </Text>
        <Text
          className="md:ml-[0] ml-[978px] md:mt-0 my-5 text-base text-black-900"
          size="txtRobotoRomanMedium16"
        >
          Home
        </Text>
        <Text
          className="md:ml-[0] ml-[37px] md:mt-0 my-5 text-base text-black-900"
          size="txtRobotoRomanMedium16"
        >
          Notifications
        </Text>
        <Img
          className="h-7 md:ml-[0] ml-[30px] mr-[63px] md:mt-0 my-4 w-7"
          src="images/img_riaccountcircleline.svg"
          alt="riaccountcircle"
        />
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
