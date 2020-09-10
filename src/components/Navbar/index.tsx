import React from "react";

import profile from "../../assets/images/profile/profile.png";

import Notifications from "../Notifications";

import {
  Container,
  SearchComponent,
  SearchIcon,
  RoundButton,
  MessageIcon,
  ProfileButton,
} from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <SearchComponent>
        <SearchIcon />
        <input type="text" placeholder="search for something..." />
      </SearchComponent>
      <Notifications />
      <RoundButton>
        <MessageIcon />
      </RoundButton>
      <ProfileButton>
        <p>Eduardo Nevanden</p>
        <img src={profile} alt="Eduardo Nevanden" />
      </ProfileButton>
    </Container>
  );
};

export default Navbar;
