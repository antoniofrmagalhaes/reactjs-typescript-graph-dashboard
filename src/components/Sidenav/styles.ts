import styled, { css } from "styled-components";
import {
  MdDashboard,
  MdInfoOutline,
  MdDesktopWindows,
  MdDns,
  MdSettings,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

interface ContainerProps {
  open: boolean;
  active?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 70%;
  height: 100%;
  padding: calc(40px + 16px) 0;
  background: white;
  border-right: 3px solid #f1f1f4;
  transform: translateX(-100%);
  transition: all 350ms ease;
  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
  @media(min-width: 420px) {
    width: 90px;
    padding: calc(40px + 32px) 0;
    transform: translateX(0);
    ${(props) =>
      props.open &&
      css`
        width: 300px;
      `}
  }
  @media (min-width: 1024px) {
    width: 250px;
  }
  @media (min-width: 1300px) {
    width: 300px;
  }
`;

export const MenuButton = styled.div<ContainerProps>`
  cursor: pointer;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 8px;
  right: -56px;
  border-radius: 3px;
  transition: all 350ms ease;
  ${(props) =>
    props.open &&
    css`
      right: 8px;
    `}
  @media(min-width: 420px) {
    top: 16px;
    right: calc(50% - 20px);
    ${(props) =>
      props.open &&
      css`
        right: 8px;
      `}
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const open = css`
  width: 25px;
`;

const afterOpen = css`
  width: 17px;
  top: -11px;
  left: -18px;
  transform: rotate(-45deg);
`;

const beforeOpen = css`
  width: 17px;
  top: 12px;
  left: -18px;
  transform: rotate(45deg);
  @supports (-moz-appearance: none) {
    top: 8px;
  }
`;

export const Bars = styled.span<ContainerProps>`
  content: "";
  position: absolute;
  height: 3px;
  width: 40px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #4e4e4e;
  transition: 150ms;
  @media (max-width: 1024px) {
    ${(props) => props.open && open}
  }
  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 40px;
    top: 1.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #4e4e4e;
    transition: 250ms;
    /* fixs a "bug" on firefox browsers */
    @supports (-moz-appearance: none) {
      top: 0.8rem;
    }
    @media (max-width: 1024px) {
      ${(props) => props.open && beforeOpen}
    }
  }
  &::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 40px;
    top: -1.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #4e4e4e;
    transition: 250ms;
    @media (max-width: 1024px) {
      ${(props) => props.open && afterOpen}
    }
  }
`;

export const Navigator = styled.ul<ContainerProps>`
  width: calc(100% + 1px);
  color: #4e4e4e;
  li {
    width: 100%;
    height: 70px;
  }
  @media (min-width: 420px) {
    li {
      a {
        svg {
          font-size: 20px;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    li {
      height: 60px;
      font-size: 14px;
      a {
        span {
          margin-left: 10px;
        }
      }
    }
  }
  @media (min-width: 1300px) {
    li {
      height: 60px;
      font-size: 16px;
      a {
        span {
          margin-left: 16px;
        }
        svg {
          font-size: 24px;
        }
      }
    }
  }
`;

export const DashboardIcon = styled(MdDashboard)``;

export const InfoIcon = styled(MdInfoOutline)``;

export const DesktopIcon = styled(MdDesktopWindows)``;

export const OrdersIcon = styled(MdDns)``;

export const SettingsIcon = styled(MdSettings)``;

export const Link = styled(NavLink)<ContainerProps>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.active &&
    css`
      border-left: 3px solid #4e4e4e;
      background: #ebeaef;
    `}
`;
