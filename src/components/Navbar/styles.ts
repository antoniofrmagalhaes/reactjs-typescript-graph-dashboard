import styled from "styled-components";
import { MdSearch, MdEmail } from "react-icons/md";

export const Container = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  margin-left: 90px;
  padding: 0 3rem;
  border-bottom: 3px solid #f1f1f4;
  background: white;
`;

export const SearchComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    font-size: 18px;
    color: #444444;
    border: none;
    background: none;
  }
`;

export const SearchIcon = styled(MdSearch)`
  font-size: 30px;
  margin-right: 10px;
  color: #8e8e8e;
`;

export const RoundButton = styled.button.attrs({
  type: "button",
})`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border-radius: 20px;
  border: none;
  background: #f5f5fb;
`;

export const MessageIcon = styled(MdEmail)`
  font-size: 25px;
  color: #4e4e4e;
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
