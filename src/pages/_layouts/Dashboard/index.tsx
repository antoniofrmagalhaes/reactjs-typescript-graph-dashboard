import React from "react";

import { Container, Content } from "./styles";

import Navbar from "../../../components/Navbar";
import Sidenav from "../../../components/Sidenav";

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Sidenav />
      <Content>{children}</Content>
    </Container>
  );
};

export default DashboardLayout;
