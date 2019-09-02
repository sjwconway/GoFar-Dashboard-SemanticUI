import React from "react";
import { Card, Icon } from "semantic-ui-react";

const TotalDistanceData = () => {
  return (
    <Card className="data-cards-r1">
      <Card.Content>
        <Icon circular inverted color="brown" name="road" size="big" />
        <div className="data-content">
          <p>Total Distance</p>
          <h2>34000 km</h2>
          <h2>4000 km</h2>
        </div>
        <Card.Content extra>
          <p>34000km (Total)</p>
          <p>4000km (This Year)</p>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};

export default TotalDistanceData;
