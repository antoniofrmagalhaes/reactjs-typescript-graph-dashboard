import styled from "styled-components";
import {
  MdBrightnessMedium,
  MdPermIdentity,
  MdSettings,
  MdHelp,
  MdBugReport,
  MdExitToApp,
} from "react-icons/md";

export const Container = styled.div`
  position: relative;
`;

export const ProfileButton = styled.button.attrs({
  type: "button",
})`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  p {
    white-space: nowrap;
    overflow: hidden;
    margin-right: 10px;
  }
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const OptionList = styled.div`
  position: absolute;
  top: calc(100% + 15px);
  left: calc(50% - 100px);
  width: 230px;
  border-radius: 4px;
  border: 2px solid #f1f1f4;
  background: #ffffff;
  &::before {
    content: "";
    position: absolute;
    right: calc(44px);
    top: -18px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(255, 255, 255, 0.8);
    @supports (-moz-appearance: none) {
      right: calc(40px);
    }
  }
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    li {
      cursor: pointer;
      height: 45px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      color: #4e4e4e;
      opacity: 0.6;
      font-size: 16px;
      &:hover {
        opacity: 1;
      }
      &:last-child {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

export const ThemeIcon = styled(MdBrightnessMedium)`
  font-size: 24px;
  margin-right: 10px;
`;

export const ProfileIcon = styled(MdPermIdentity)`
  font-size: 24px;
  margin-right: 10px;
`;

export const SettingsIcon = styled(MdSettings)`
  font-size: 24px;
  margin-right: 10px;
`;

export const HelpIcon = styled(MdHelp)`
  font-size: 24px;
  margin-right: 10px;
`;

export const BugIcon = styled(MdBugReport)`
  font-size: 24px;
  margin-right: 10px;
`;

export const LogoutIcon = styled(MdExitToApp)`
  font-size: 24px;
  margin-right: 10px;
`;
