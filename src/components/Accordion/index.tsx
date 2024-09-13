import { useCallback, useState } from "react";
import AccordionItem, { AccordionItemType } from "./AccordionItem";

type Props = {
  data: AccordionItemType[];
  style?: React.CSSProperties;
};

const Accordion: React.FC<Props> = ({ data, style, ...rest }) => {
  const [expandedId, setExpandedId] = useState<string | number>();

  const handleClick = useCallback(
    (id: string | number) => (e: any) => {
      if (expandedId === id) setExpandedId(undefined);
      else setExpandedId(id);
    },
    [expandedId]
  );

  return (
    <div style={style} {...rest}>
      {data.map((d, index) => {
        return (
          <AccordionItem
            key={index}
            id={d.id}
            title={d.title}
            content={d.content}
            expanded={expandedId === d.id}
            onClick={handleClick(d.id)}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
