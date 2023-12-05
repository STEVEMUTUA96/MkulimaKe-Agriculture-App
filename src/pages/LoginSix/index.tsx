import React from "react";

import { Button, Img, Input, Text } from "components";

const LoginSixPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto md:pl-10 pl-14 sm:pl-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1384px] mx-auto w-full">
          <div className="flex flex-col justify-start md:mt-0 mt-[26px]">
            <Img
              className="h-72 sm:h-auto mr-[25px] object-cover w-[97%] md:w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <a
              href="javascript:"
              className="md:ml-[0] ml-[264px] mt-[27px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            >
              <Text size="txtRobotoRomanMedium24">Create account</Text>
            </a>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[47px] mt-[33px] w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Surname
                  </Text>
                  <Input
                    name="group1541"
                    placeholder="Mike"
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="border border-black-900 border-solid mt-1 w-full"
                    shape="round"
                    size="sm"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Other names
                  </Text>
                  <Input
                    name="group1544"
                    placeholder="Luca Anothony"
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="border border-black-900 border-solid mt-1 w-full"
                    shape="round"
                    size="sm"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[19px] w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Email address
                  </Text>
                  <Input
                    name="email"
                    placeholder="Mike@gmail.com"
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="border border-black-900 border-solid mt-1 w-full"
                    type="email"
                    shape="round"
                    size="sm"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Phone number
                  </Text>
                  <Input
                    name="mobileNo"
                    placeholder="+2547000000000"
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="border border-black-900 border-solid mt-1 w-full"
                    shape="round"
                    size="sm"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[27px] w-[47%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoRomanRegular16"
                >
                  Password
                </Text>
                <Input
                  name="group1545"
                  placeholder="Mike@Gurumesa123"
                  className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                  wrapClassName="border border-black-900 border-solid mt-1 w-full"
                  shape="round"
                  size="sm"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[141px] md:ml-[0] ml-[228px] mt-12 text-base text-center"
                shape="round"
                color="teal_500"
                size="md"
                variant="fill"
              >
                Create account
              </Button>
              <Text
                className="md:ml-[0] ml-[212px] mt-[9px] text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                <span className="text-black-900 font-roboto text-left font-normal">
                  Have an account?{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-light_blue-700 font-roboto text-left font-normal underline"
                >
                  sign in
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

export default LoginSixPage;
