import { useCallback } from "react";
import styled from "styled-components";

const Root = styled.div<{
  width?: number | string;
  height?: number | string;
  disabled?: boolean;
}>`
  width: ${(props) => props.width || "32px"};
  height: ${(props) => props.height || "32px"};
  cursor: pointer;
  background-color: ${(props) =>
    props.disabled
      ? `${props.theme.colors.cyan010}80`
      : props.theme.colors.cyan010};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${(props) =>
      props.disabled
        ? `${props.theme.colors.cyan}80`
        : props.theme.colors.cyan};
  }
`;

type Props = {
  width?: number | string;
  height?: number | string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
  children?: React.ReactNode;
};

export const IconButton: React.FC<Props> = ({
  width,
  height,
  onClick,
  disabled,
  children,
  ...rest
}) => {
  const handleClick = useCallback(
    (e: any) => {
      if (disabled) return;
      if (onClick) onClick(e);
    },
    [disabled, onClick]
  );

  return (
    <Root onClick={handleClick} {...{ width, height, disabled }} {...rest}>
      {children}
    </Root>
  );
};
