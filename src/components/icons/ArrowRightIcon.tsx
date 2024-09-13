import React from "react";
import { IconProps } from "./types";

export const ArrowRightIcon: React.FC<IconProps> = ({
  fill = "currentColor",
  width = 24,
  height = 24,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ fill, width, height, className }}
    >
      <path d="M13.95 12L9 7.05L10.414 5.636L16.778 12L10.414 18.364L9 16.95L13.95 12Z" />
    </svg>
  );
};
