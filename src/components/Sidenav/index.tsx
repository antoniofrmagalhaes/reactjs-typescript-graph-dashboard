import React, { useState } from "react";

import {
  Container,
  MenuButtonContainer,
  MenuButton,
  Bars,
  Navigator,
  DashboardIcon,
  InfoIcon,
  DesktopIcon,
  OrdersIcon,
  SettingsIcon,
} from "./styles";

const Sidenav: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <MenuButtonContainer>
        <MenuButton onClick={() => setOpen(!open)} open={open}>
          <Bars open={open} />
        </MenuButton>
      </MenuButtonContainer>
      <Navigator>
        <li>
          <DashboardIcon />
        </li>
        <li>
          <InfoIcon />
        </li>
        <li>
          <DesktopIcon />
        </li>
        <li>
          <OrdersIcon />
        </li>
        <li>
          <SettingsIcon />
        </li>
      </Navigator>
    </Container>
  );
};

export default Sidenav;
