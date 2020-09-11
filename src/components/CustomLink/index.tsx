import React from "react";
import { useRouteMatch } from "react-router-dom";

import { Link } from "./styles";

interface CustomLinkProps {
  to: string;
  icon: React.ComponentType;
  label: string;
  open: boolean;
  onClick: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  to,
  icon: Icon,
  label,
  open,
  onClick,
}) => {
  const match = useRouteMatch({ path: to });
  return (
    <Link to={to} active={match?.isExact ? 1 : 0} onClick={onClick} open={open}>
      <Icon />
      <span>{label}</span>
    </Link>
  );
};

export default CustomLink;
