import React from "react";

import { Button, Img, Text } from "components";

const FAPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto md:pl-10 pl-14 sm:pl-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1384px] mx-auto w-full">
          <div className="flex flex-col gap-[30px] justify-start md:mt-0 mt-[26px]">
            <div className="flex flex-col relative w-full">
              <Img
                className="h-72 mx-auto object-cover w-full"
                src="images/img_image1.png"
                alt="imageOne"
              />
              <Text
                className="mt-[-1.51px] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl z-[1]"
                size="txtRobotoRomanSemiBold24"
              >
                Code Verification
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[154px] text-base text-black-900"
              size="txtRobotoRomanRegular16"
            >
              Enter the 4-digit code that has been sent to your email{" "}
            </Text>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[247px] w-[30%] md:w-full">
              <Img
                className="h-8 ml-1 md:ml-[0]"
                src="images/img_group63.svg"
                alt="groupSixtyThree"
              />
              <Button
                className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[75px] md:ml-[0] ml-[53px] mt-7 text-base text-center"
                shape="round"
                color="teal_500"
                size="md"
                variant="fill"
              >
                Verify
              </Button>
              <Text
                className="mt-[30px] text-base text-light_blue-A700"
                size="txtRobotoRomanRegular16LightblueA700"
              >
                <span className="text-black-900 font-roboto text-left font-normal">
                  Didn’t receive code?{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-light_blue-A700 font-roboto text-left font-normal underline"
                >
                  resend
                </a>
              </Text>
            </div>
          </div>
          <div className="bg-gradient  h-[1024px] w-[44%]"></div>
        </div>
      </div>
    </>
  );
};

export default FAPage;
