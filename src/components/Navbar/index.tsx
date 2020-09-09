import React from "react";

import profile from "../../assets/images/profile/profile.png";

import {
  Container,
  SearchComponent,
  SearchIcon,
  RoundButton,
  NotificationsIcon,
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
      <RoundButton>
        <NotificationsIcon />
      </RoundButton>
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
