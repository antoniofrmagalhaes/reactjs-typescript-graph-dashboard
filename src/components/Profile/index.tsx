import React, { useState } from "react";

import profile from "../../assets/images/profile/profile.png";

import {
  Container,
  ProfileButton,
  OptionList,
  ThemeIcon,
  ProfileIcon,
  SettingsIcon,
  HelpIcon,
  BugIcon,
  LogoutIcon,
} from "./styles";

const Profile: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <ProfileButton onClick={() => setOpen(!open)}>
        <p>Eduardo Nevanden</p>
        <img src={profile} alt="Eduardo Nevanden" />
      </ProfileButton>
      {open && (
        <OptionList>
          <ul>
            <li>
              <ThemeIcon /> Theme: Dark
            </li>
            <li>
              <ProfileIcon /> My Profile
            </li>
            <li>
              <SettingsIcon /> Settings
            </li>
            <li>
              <HelpIcon /> Help
            </li>
            <li>
              <BugIcon /> Report a problem
            </li>
            <li>
              <LogoutIcon /> Logout
            </li>
          </ul>
        </OptionList>
      )}
    </Container>
  );
};

export default Profile;
