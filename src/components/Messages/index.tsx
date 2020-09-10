import React, { useState } from "react";

import {
  Container,
  Button,
  MessagesIcon,
  MessagesList,
  Options,
  Scroll,
  Message,
  InfoContainer,
  AllMessages,
} from "./styles";

const Messages: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Button onClick={() => setOpen(!open)} hasUnread>
        <MessagesIcon />
      </Button>
      {open && (
        <MessagesList>
          <Options>
            <button>All</button>
            <button>Unread</button>
          </Options>
          <Scroll>
            <Message>
              <p>Eduardo Nevanden sent you a message</p>
              <InfoContainer unread>
                <time>10 minutes ago</time>
              </InfoContainer>
            </Message>
          </Scroll>
          <AllMessages>
            <p>All Messages</p>
          </AllMessages>
        </MessagesList>
      )}
    </Container>
  );
};

export default Messages;
