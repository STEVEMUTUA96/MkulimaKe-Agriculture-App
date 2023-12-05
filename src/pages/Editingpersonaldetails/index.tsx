import React from "react";

import { Button, Img, Input, Text } from "components";
import Header1 from "components/Header1";

const EditingpersonaldetailsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-start mx-auto pb-[175px] w-full">
        <div className="flex flex-col md:gap-10 gap-[78px] justify-start w-full">
          <Header1 className="bg-white-A700_33 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
          <div className="flex flex-col items-start justify-start ml-20 md:ml-[0] md:px-5 w-[65%] md:w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtRobotoRomanMedium20"
            >
              Profile
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[55px] w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[109px] justify-start w-[21%] md:w-full">
                <div className="h-[174px] ml-5 md:ml-[0] relative w-[174px]">
                  <Img
                    className="h-[174px] m-auto rounded-[50%] w-[174px]"
                    src="images/img_ellipse3.png"
                    alt="ellipseThree"
                  />
                  <Img
                    className="absolute bottom-[0] h-6 right-[0] w-6"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                </div>
                <Text
                  className="text-black-900 text-xl"
                  size="txtRobotoRomanMedium20"
                >
                  Commission
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-[72%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[45%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Surname
                    </Text>
                    <Input
                      name="group1507"
                      placeholder="Mike"
                      className="font-semibold leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                      wrapClassName="border border-black-900 border-solid mt-1 w-full"
                      shape="round"
                      size="sm"
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[45%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Other names
                    </Text>
                    <Input
                      name="group1504"
                      placeholder="Luca Anthony"
                      className="font-semibold leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                      wrapClassName="border border-black-900 border-solid mt-1 w-full"
                      shape="round"
                      size="sm"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[45%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    Email
                  </Text>
                  <Input
                    name="email_One"
                    placeholder="Mike@gmail.com"
                    className="font-semibold leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="border border-black-900 border-solid mt-1 w-full"
                    type="email"
                    shape="round"
                    size="sm"
                  ></Input>
                </div>
                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanRegular16"
                    >
                      Phone number
                    </Text>
                    <Input
                      name="mobileNo"
                      placeholder="+254700000000"
                      className="font-semibold leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                      wrapClassName="border border-black-900 border-solid mt-1 w-full"
                      shape="round"
                      size="sm"
                    ></Input>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[67px] mt-[19px] text-base text-center"
                    shape="round"
                    color="teal_500"
                    size="md"
                    variant="fill"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
            <Text
              className="mt-[34px] text-black-900 text-xl"
              size="txtRobotoRomanRegular20"
            >
              Earning summary
            </Text>
            <div className="flex md:flex-col flex-row gap-11 items-center justify-start mt-[15px] w-[65%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-4 rounded-[16px] shadow-bs1 w-[47%] md:w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start mb-20 mt-1 w-[97%] md:w-full">
                  <div className="flex flex-row items-end justify-evenly w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtRobotoRomanRegular20"
                      >
                        October earnings
                      </Text>
                      <Text
                        className="mt-[3px] text-base text-gray-600"
                        size="txtInterRegular16Gray600"
                      >
                        0.5% more than September
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] mt-[18px] w-[30px]"
                      src="images/img_reply.svg"
                      alt="moving"
                    />
                  </div>
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                    size="txtRobotoRomanRegular50"
                  >
                    Ksh 1000
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[50px] items-start justify-start p-4 rounded-[16px] shadow-bs1">
                <Text
                  className="mt-1 text-black-900 text-xl"
                  size="txtRobotoRomanRegular20"
                >
                  Total earnings
                </Text>
                <Text
                  className="mb-20 md:ml-[0] ml-[5px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                  size="txtRobotoRomanRegular50"
                >
                  Ksh 12000
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditingpersonaldetailsPage;
