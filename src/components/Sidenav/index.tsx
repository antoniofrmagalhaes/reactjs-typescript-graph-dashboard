import React, { useState } from "react";

import CustomLink from "../CustomLink";

import {
  Container,
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
    <Container open={open}>
      <MenuButton onClick={() => setOpen(!open)} open={open}>
        <Bars open={open} />
      </MenuButton>
      <Navigator open={open}>
        <li>
          <CustomLink
            to="/"
            icon={DashboardIcon}
            open={open}
            label="Dashboard"
            onClick={() => setOpen(false)}
          />
        </li>
        <li>
          <CustomLink
            to="/informations"
            icon={InfoIcon}
            open={open}
            label="Informations"
            onClick={() => setOpen(false)}
          />
        </li>
        <li>
          <CustomLink
            to="/desktops"
            icon={DesktopIcon}
            open={open}
            label="Desktops"
            onClick={() => setOpen(false)}
          />
        </li>
        <li>
          <CustomLink
            to="/orders"
            icon={OrdersIcon}
            open={open}
            label="Orders"
            onClick={() => setOpen(false)}
          />
        </li>
        <li>
          <CustomLink
            to="/settings"
            icon={SettingsIcon}
            open={open}
            label="Settings"
            onClick={() => setOpen(false)}
          />
        </li>
      </Navigator>
    </Container>
  );
};

export default Sidenav;
