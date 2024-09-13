import { IconButton } from "components/IconButton";
import { ArrowLeftIcon } from "components/icons";

type Props = {
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
};

export const PrevArrow: React.FC<Props> = ({ disabled, onClick, ...rest }) => (
  <IconButton onClick={onClick} disabled={disabled} {...rest}>
    <ArrowLeftIcon width="1.6rem" height="1.6rem" />
  </IconButton>
);
