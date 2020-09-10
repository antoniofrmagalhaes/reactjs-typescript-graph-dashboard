import styled from "styled-components";
import { MdSearch } from "react-icons/md";

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
