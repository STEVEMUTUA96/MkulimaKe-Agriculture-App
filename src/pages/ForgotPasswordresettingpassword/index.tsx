import React from "react";

import { Button, Img, Input, Text } from "components";

const ForgotPasswordresettingpasswordPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[31px] md:px-5 w-[46%] md:w-full">
            <Img
              className="h-72 sm:h-auto object-cover w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <Text
              className="mt-[90px] text-base text-black-900"
              size="txtRobotoRomanRegular16"
            >
              Enter your email. We will send you a link to reset your password.
            </Text>
            <div className="flex flex-col items-start justify-start mt-[38px] w-[46%] md:w-full">
              <Text
                className="text-base text-black-900"
                size="txtRobotoRomanRegular16"
              >
                Email address
              </Text>
              <Input
                name="rectangleOne"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="border border-black-900 border-solid flex h-[35px] mt-1 w-full"
                shape="round"
              ></Input>
            </div>
            <Button
              className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[147px] mt-4 text-base text-center"
              shape="round"
              color="teal_500"
              size="md"
              variant="fill"
            >
              Reset password
            </Button>
          </div>
          <div className="bg-gradient  h-[1024px] md:px-5 w-[55%]"></div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordresettingpasswordPage;
