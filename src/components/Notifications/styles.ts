import styled, { css } from "styled-components";
import { MdNotificationsActive } from "react-icons/md";
import PerfectScrollBar from "react-perfect-scrollbar";

interface ButtonProps {
  hasUnread?: boolean;
}

interface NotificationProps {
  unread?: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button<ButtonProps>`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border-radius: 20px;
  border: none;
  background: #f5f5fb;
  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        background: #4e4e4e;
        content: "";
        border-radius: 50%;
      }
    `}
`;

export const NotificationsIcon = styled(MdNotificationsActive)`
  font-size: 25px;
  color: #4e4e4e;
`;

export const NotificationsList = styled.div`
  position: absolute;
  width: 350px;
  left: calc(50% - 175px);
  top: calc(100% + 20px);
  padding: 15px 5px;
  border-radius: 4px;
  border: 2px solid #f1f1f4;
  background: #ffffff;
  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 25px);
    top: -18px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(255, 255, 255, 0.8);
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding: 0 15px;
  > button {
    opacity: 0.7;
    border: none;
    background: none;
    & + button {
      margin-left: 10px;
    }
    &:hover {
      opacity: 1;
    }
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 450px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #4e4e4e;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(78, 78, 78, 0.4);
  }

  p {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const InfoContainer = styled.div<NotificationProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  time {
    font-size: 14px;
    opacity: 0.8;
  }

  button {
    color: #4e4e4e;
    border: none;
    background: none;
  }
`;

export const AllNotification = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  p {
    font-size: 16px;
  }
  &:hover {
    p {
      border-bottom: 2px solid #4e4e4e;
    }
  }
`;
