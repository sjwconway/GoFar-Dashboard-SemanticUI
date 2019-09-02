import React from "react";
import { Card, Icon } from "semantic-ui-react";

const BusinessTravelData = () => {
  return (
    <Card className="data-cards-r1">
      <Card.Content>
        <Icon circular inverted color="blue" name="handshake" size="big" />
        <div className="data-content">
          <p>Business Travel</p>
          <h2>75%</h2>
          <h2>30000 km</h2>
        </div>
        <Card.Content extra></Card.Content>
      </Card.Content>
      <hr></hr>
    </Card>
  );
};

export default BusinessTravelData;
