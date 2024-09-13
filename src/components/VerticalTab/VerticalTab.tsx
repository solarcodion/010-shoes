import { useCallback } from "react";
import { styled } from "styled-components";
import VerticalTabItem from "./VerticalTabItem";

const Root = styled.div<{ width?: string | number }>`
  width: ${(props) => props.width || "100%"};
  position: relative;
  padding: 30px 0;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    border-left: 1px solid #6e6e75;
    top: 0;
    left: 50%;
  }
`;

const EndLine = styled.div<{ top?: boolean }>`
  width: 20px;
  height: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  position: absolute;
  top: ${(props) => props.top && 0};
  bottom: ${(props) => !props.top && 0};
  left: 50%;
  transform: translate(-50%, 0);
`;

type Props = {
  tabs: {
    id: number | string;
    label: string;
  }[];
  selected?: number | string;
  onTabChange: (id: number | string) => void;
};

const VerticalTab: React.FC<Props> = ({ tabs, selected, onTabChange }) => {
  const handleClick = useCallback(
    (id: number | string) => {
      onTabChange(id);
    },
    [onTabChange]
  );

  return (
    <Root>
      {tabs.map(({ id, label }, index) => {
        return (
          <VerticalTabItem
            key={id}
            id={id}
            label={label}
            left={index % 2 === 1}
            selected={selected === id}
            onClick={handleClick}
          />
        );
      })}
      <EndLine top={true} />
      <EndLine top={false} />
    </Root>
  );
};

export default VerticalTab;
