import { IconButton } from "components/IconButton";
import { ArrowRightIcon } from "components/icons";

type Props = {
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
};

export const NextArrow: React.FC<Props> = ({ disabled, onClick, ...rest }) => (
  <IconButton onClick={onClick} disabled={disabled} {...rest}>
    <ArrowRightIcon width="1.6rem" height="1.6rem" />
  </IconButton>
);
