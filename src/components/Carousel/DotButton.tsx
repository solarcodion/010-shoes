import React from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
  &:not(:first-of-type) {
    margin-left: 0.8rem;
  }
`;

type Props = {
  selected?: boolean;
  color?: string;
  selectedColor: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const DotButton: React.FC<Props> = ({
  selected,
  color,
  selectedColor,
  onClick,
}) => (
  <Root
    style={{ backgroundColor: selected ? selectedColor : color || "black" }}
    onClick={onClick}
  />
);
