import React from "react";

const sizeClasses = {
  txtInterRegular16Gray600: "font-inter font-normal",
  txtRobotoRomanSemiBold16: "font-roboto font-semibold",
  txtRobotoRomanMedium16Gray600: "font-medium font-roboto",
  txtRobotoRomanRegular16Gray600: "font-normal font-roboto",
  txtInterSemiBold250: "font-inter font-semibold",
  txtRobotoRomanRegular16Teal500: "font-normal font-roboto",
  txtRobotoRomanSemiBold24: "font-roboto font-semibold",
  txtRobotoRomanRegular20: "font-normal font-roboto",
  txtRobotoRomanBold16: "font-bold font-roboto",
  txtRobotoRomanSemiBold20: "font-roboto font-semibold",
  txtRobotoRomanMedium24: "font-medium font-roboto",
  txtRobotoRomanRegular16Black9007f: "font-normal font-roboto",
  txtRobotoRomanBold24: "font-bold font-roboto",
  txtRobotoRomanRegular16Gray80099: "font-normal font-roboto",
  txtRobotoRomanRegular16Black9007e: "font-normal font-roboto",
  txtRobotoRomanRegular20Black9007f: "font-normal font-roboto",
  txtRobotoRomanMedium20: "font-medium font-roboto",
  txtRobotoRomanRegular50: "font-normal font-roboto",
  txtRobotoRomanMedium20Teal500: "font-medium font-roboto",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtRobotoRomanMedium16Teal500: "font-medium font-roboto",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtRobotoRomanRegular16LightblueA700: "font-normal font-roboto",
  txtRobotoRomanRegular74: "font-normal font-roboto",
  txtInterRegular12: "font-inter font-normal",
  txtRobotoRomanRegular16Lightblue700: "font-normal font-roboto",
  txtRobotoRomanRegular12: "font-normal font-roboto",
  txtInterSemiBold80: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtRobotoRomanMedium16: "font-medium font-roboto",
  txtRobotoRomanSemiBold74: "font-roboto font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
