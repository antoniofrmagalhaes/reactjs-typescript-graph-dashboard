import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Navbar = styled.div`
  height: 65px;
  background: white;
  border-bottom: 3px solid #f1f1f4;
`;

export const Sidenav = styled.div`
  position: fixed;
  width: 90px;
  top: 0;
  left: 0;
  bottom: 0;
  background: white;
  border-right: 3px solid #f1f1f4;
`;

export const Content = styled.div`
  height: calc(100% - 65px);
  margin-left: 90px;
`;
