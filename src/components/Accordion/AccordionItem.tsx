import { FaMinus, FaPlus } from "react-icons/fa";
import { styled } from "styled-components";
import { motion } from "framer-motion";

export type AccordionItemType = {
  id: string | number;
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  expanded?: boolean;
};

const Root = styled.div``;

const TitleContainer = styled.div<{
  expanded: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.expanded
      ? `3px solid ${props.theme.colors.secondaryBg}`
      : "1px solid #3c3c46"};
  padding: 16px 0;
  cursor: pointer;
`;

const Title = styled.div<{
  expanded: boolean;
}>`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) =>
    props.expanded ? props.theme.colors.secondaryBg : props.theme.colors.white};
`;

const Content = styled.div`
  margin: 20px 0;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
`;

type Props = AccordionItemType & {
  onClick?: (e: any) => void;
};

const AccordionItem: React.FC<Props> = ({
  title,
  content,
  expanded = false,
  onClick,
}) => {
  return (
    <Root>
      <TitleContainer onClick={onClick} expanded={expanded}>
        <Title expanded={expanded}>{title}</Title>
        {expanded ? <FaMinus /> : <FaPlus />}
      </TitleContainer>
      {expanded && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ originY: 0 }}
        >
          <Content>{content}</Content>
        </motion.div>
      )}
    </Root>
  );
};

export default AccordionItem;
