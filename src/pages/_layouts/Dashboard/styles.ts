import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  height: calc(100% - 65px);
  padding-top: 65px;
  @media (min-width: 420px) {
    margin-left: 90px;
  }
  @media (min-width: 1024px) {
    margin-left: 250px;
  }
  @media (min-width: 1300px) {
    margin-left: 300px;
  }
`;
