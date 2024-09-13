import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const WIDTH = "80px";
const MOBILE_WIDTH = "50px";
const HEIGHT = "6px";

type Props = {
  urls: string[];
  horizontal?: boolean;
};

const Root = styled.div<{
  horizontal?: boolean;
}>`
  position: fixed;
  z-index: 999;
  right: ${(props) => (props.horizontal ? "unset" : "30px")};
  left: ${(props) => (props.horizontal ? "50vw" : "unset")};
  top: ${(props) => (props.horizontal ? "unset" : "50vh")};
  bottom: ${(props) => (props.horizontal ? "40px" : "unset")};
  transform: ${(props) =>
    props.horizontal ? "translate(-50%, -50%)" : "translate(0, -50%)"};

  display: flex;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  gap: 6px;
`;

const Dot = styled.div<{
  horizontal?: boolean;
  active?: boolean;
}>`
  width: ${(props) => (props.horizontal ? MOBILE_WIDTH : HEIGHT)};
  height: ${(props) => (props.horizontal ? HEIGHT : WIDTH)};
  background-color: ${(props) =>
    props.active ? props.theme.colors.secondaryBg : "transparent"};
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DotInside = styled.div<{
  horizontal?: boolean;
}>`
  width: ${(props) => (props.horizontal ? MOBILE_WIDTH : "3px")};
  height: ${(props) => (props.horizontal ? "3px" : WIDTH)};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.border};
  z-index: -1;
`;

const FullPageNav: React.FC<Props> = ({ urls, horizontal }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(
    (url: string) => () => {
      navigate(url);
    },
    [navigate]
  );

  if (!urls.length) return null;

  return (
    <Root horizontal={horizontal}>
      {urls.map((url) => {
        const active = location.pathname === url;
        return (
          <Dot
            key={url}
            onClick={handleClick(url)}
            active={active}
            horizontal={horizontal}
          >
            <DotInside horizontal={horizontal} />
          </Dot>
        );
      })}
    </Root>
  );
};

export default FullPageNav;
