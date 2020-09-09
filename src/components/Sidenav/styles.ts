import styled, { css } from "styled-components";
import {
  MdDashboard,
  MdInfoOutline,
  MdDesktopWindows,
  MdDns,
  MdSettings,
} from "react-icons/md";

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div`
  position: fixed;
  width: 90px;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-right: 3px solid #f1f1f4;
`;

export const MenuButtonContainer = styled.div`
  width: 90px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuButton = styled.div<ContainerProps>`
  cursor: pointer;
  z-index: 999;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 3px;
`;

const open = css`
  background-color: transparent;
`;

const afterOpen = css`
  top: 0;
  transform: rotate(-45deg);
`;

const beforeOpen = css`
  top: 0;
  transform: rotate(45deg);
  @supports (-moz-appearance: none) {
    top: 0rem;
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
  ${(props) => props.open && open}
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
    ${(props) => props.open && beforeOpen}
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
    ${(props) => props.open && afterOpen}
  }
`;

export const Navigator = styled.ul`
  color: #4e4e4e;
  li {
    width: 90px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ebeaef;
  }
`;

export const DashboardIcon = styled(MdDashboard)`
  font-size: 24px;
`;

export const InfoIcon = styled(MdInfoOutline)`
  font-size: 24px;
`;

export const DesktopIcon = styled(MdDesktopWindows)`
  font-size: 24px;
`;

export const OrdersIcon = styled(MdDns)`
  font-size: 24px;
`;

export const SettingsIcon = styled(MdSettings)`
  font-size: 24px;
`;
