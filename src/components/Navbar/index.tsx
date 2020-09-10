import React from "react";

import Notifications from "../Notifications";
import Messages from "../Messages";
import Profile from "../Profile";

import { Container, SearchComponent, SearchIcon } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <SearchComponent>
        <SearchIcon />
        <input type="text" placeholder="search for something..." />
      </SearchComponent>
      <Notifications />
      <Messages />
      <Profile />
    </Container>
  );
};

export default Navbar;
