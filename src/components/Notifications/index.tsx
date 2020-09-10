import React, { useState } from "react";

import {
  Container,
  Button,
  NotificationsIcon,
  NotificationsList,
  Options,
  Scroll,
  Notification,
  InfoContainer,
  AllNotification,
} from "./styles";

const Notifications: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Button onClick={() => setOpen(!open)} hasUnread>
        <NotificationsIcon />
      </Button>
      {open && (
        <NotificationsList>
          <Options>
            <button>All</button>
            <button>Unread</button>
          </Options>
          <Scroll>
            <Notification>
              <p>Delivery nº #0045933 was completed.</p>
              <InfoContainer unread>
                <time>10 minutes ago</time>
              </InfoContainer>
            </Notification>
            <Notification>
              <p>Delivery nº #0045933 was completed.</p>
              <InfoContainer>
                <time>1 hour ago</time>
              </InfoContainer>
            </Notification>
            <Notification>
              <p>Delivery nº #0045933 was completed.</p>
              <InfoContainer>
                <time>10 minutes ago</time>
              </InfoContainer>
            </Notification>
            <Notification>
              <p>Delivery nº #0045933 was completed.</p>
              <InfoContainer>
                <time>10 minutes ago</time>
              </InfoContainer>
            </Notification>
            <Notification>
              <p>Delivery nº #0045933 was completed.</p>
              <InfoContainer>
                <time>10 minutes ago</time>
              </InfoContainer>
            </Notification>
            <Notification>
              <p>Delivery nº #0045933 was completed.</p>
              <InfoContainer>
                <time>10 minutes ago</time>
              </InfoContainer>
            </Notification>
            <Notification>
              <p>Delivery nº #0045933 was completed.</p>
              <InfoContainer>
                <time>10 minutes ago</time>
              </InfoContainer>
            </Notification>
          </Scroll>
          <AllNotification>
            <p>All notifications</p>
          </AllNotification>
        </NotificationsList>
      )}
    </Container>
  );
};

export default Notifications;
