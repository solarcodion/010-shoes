import styled from "styled-components";

type Props = {
  display?: string;
  customJustifyContent?: string;
  customAlignItems?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingLeft?: string;
  paddingRight?: string;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  overflow?: string;
  height?: string;
  minHeight?: string;
  flexDirection?: string;
  flexGrow?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  gap?: string;
  flexWrap?: string;
  alignSelf?: string;
  position?: string;
  children?: React.ReactNode;
};

export const Box: React.FC<Props> = styled.div`
  ${({ display }) => display && `display: ${display};`}
  ${({ customJustifyContent }) =>
    customJustifyContent && `justify-content: ${customJustifyContent};`}
  ${({ customAlignItems }) =>
    customAlignItems && `align-items: ${customAlignItems};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`}
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow};`}
  ${({ background }) => background && `background: ${background};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ flexWrap }) =>
    flexWrap ? `flex-wrap: ${flexWrap};` : "flex-wrap: wrap;"}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
  ${({ position }) => position && `position: ${position}`}
`;

export const FlexBox: React.FC<Props> = (props) => {
  const restProps = {
    ...props,
    children: undefined,
  };
  return (
    <Box {...restProps} display="flex">
      {props.children}
    </Box>
  );
};
