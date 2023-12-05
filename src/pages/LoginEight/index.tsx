import React from "react";

import { Button, Img, Input, Text } from "components";

const LoginEightPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto md:pl-10 pl-14 sm:pl-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1384px] mx-auto w-full">
          <div className="flex flex-col items-center justify-start md:mt-0 mt-[26px]">
            <Img
              className="h-72 sm:h-auto object-cover w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <a
              href="javascript:"
              className="mt-[30px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            >
              <Text size="txtRobotoRomanMedium24">Login</Text>
            </a>
            <div className="flex flex-col items-center justify-start mt-[21px] w-[46%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Username
                  </Text>
                  <Input
                    name="rectangleOne"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-black-900 border-solid flex h-[35px] mt-1 w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start mt-5 w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Password
                  </Text>
                  <Input
                    name="rectangleTwo"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-black-900 border-solid flex h-[35px] mt-1 w-full"
                    shape="round"
                  ></Input>
                </div>
                <Button
                  className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[72px] md:ml-[0] ml-[108px] mt-4 text-base text-center"
                  shape="round"
                  color="teal_500"
                  size="md"
                  variant="fill"
                >
                  Login
                </Button>
                <div className="flex flex-row items-center justify-between mt-[17px] w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    <span className="text-black-900 font-roboto text-left font-normal">
                      New user?{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-light_blue-700 font-roboto text-left font-normal underline"
                    >
                      sign up
                    </a>
                  </Text>
                  <a
                    href="javascript:"
                    className="text-base text-light_blue-700 underline"
                  >
                    <Text size="txtRobotoRomanRegular16Lightblue700">
                      Forgot password?
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient  h-[1024px] w-[44%]"></div>
        </div>
      </div>
    </>
  );
};

export default LoginEightPage;
