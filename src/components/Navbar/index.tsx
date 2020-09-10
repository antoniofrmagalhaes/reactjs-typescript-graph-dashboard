import React from "react";

import profile from "../../assets/images/profile/profile.png";

import Notifications from "../Notifications";

import {
  Container,
  SearchComponent,
  SearchIcon,
  ProfileButton,
} from "./styles";
import Messages from "../Messages";

const Navbar: React.FC = () => {
  return (
    <Container>
      <SearchComponent>
        <SearchIcon />
        <input type="text" placeholder="search for something..." />
      </SearchComponent>
      <Notifications />
      <Messages />
      <ProfileButton>
        <p>Eduardo Nevanden</p>
        <img src={profile} alt="Eduardo Nevanden" />
      </ProfileButton>
    </Container>
  );
};

export default Navbar;
