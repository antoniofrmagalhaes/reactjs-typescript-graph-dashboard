import React from "react";

import { Container, Sidenav, Content } from "./styles";

import Navbar from "../../../components/Navbar";

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
