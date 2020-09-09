import React from "react";

import { Container, Navbar, Sidenav, Content } from "./styles";

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
