import React from "react";
import { IconProps } from "./types";

export const ArrowLeftIcon: React.FC<IconProps> = ({
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
      <path d="M10.05 12L15 7.05L13.586 5.636L7.222 12L13.586 18.364L15 16.95L10.05 12Z" />
    </svg>
  );
};
