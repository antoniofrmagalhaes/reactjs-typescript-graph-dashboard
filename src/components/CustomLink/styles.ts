import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

interface LinkProps {
  active: number;
  open: boolean;
}

export const Link = styled(NavLink)<LinkProps>`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  opacity: 0.7;
  color: #4e4e4e;
  transition: background 350ms ease;
  background: #ffffff;
  &:hover {
    opacity: 1;
    background: #ebeaef;
  }
  span {
    margin-left: 16px;
    @media (max-width: 999px) {
      display: ${(props) => (props.open ? "block" : "none")};
    }
  }

  @media (min-width: 420px) and (max-width: 999px) {
    ${(props) =>
      !props.open &&
      css`
        justify-content: center;
      `}
  }
  @media (min-width: 999px) {
    ${(props) =>
      props.open &&
      css`
        justify-content: center;
        span {
          display: none;
        }
      `};
  }
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      background: #ebeaef;
    `}
`;
