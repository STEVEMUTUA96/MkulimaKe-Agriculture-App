import React from "react";

const shapes = { round: "rounded" } as const;
const variants = {
  fill: {
    deep_orange_500: "bg-deep_orange-500 text-white-A700",
    blue_gray_300_87: "bg-blue_gray-300_87",
    white_A700: "bg-white-A700 text-blue_gray-900",
    green_500_99: "bg-green-500_99 text-black-900",
    gray_600_99: "bg-gray-600_99 text-black-900",
    red_A700_99: "bg-red-A700_99 text-black-900",
    red_A200_99: "bg-red-A200_99 text-black-900",
    light_green_500_99: "bg-light_green-500_99 text-black-900",
    teal_500: "bg-teal-500 text-white-A700",
  },
} as const;
const sizes = { xs: "p-1", sm: "p-[7px]", md: "p-2.5" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
