import React from "react";
import { Card, Image, Divider, Icon, Responsive } from "semantic-ui-react";

const LastFillUpData = () => {
  // const cardStyle = {
  //     width: '100%'
  // }
  return (
    // <Responsive as={Card}>
    <Card className="data-cards-r1">
      <Card.Content>
        <Icon
          float="left"
          circular
          inverted
          color="teal"
          name="battery high"
          size="big"
        />
        <div className="data-content">
          <p>Last Fill Up:</p>
          <h2>30 L</h2>
        </div>
        <Card.Content extra>
          <hr></hr>
          <p>Thursday 15th Aug 3pm</p>
          <p>Last Location: Bondi Beach</p>
        </Card.Content>
      </Card.Content>
    </Card>
    // </Responsive>
  );
};

export default LastFillUpData;
