import React from "react";
import { Card, Icon } from "semantic-ui-react";

const AverageSpeedData = () => {
  return (
    <Card className="data-cards-r1">
      <Card.Content>
        <Icon
          circular
          inverted
          color="yellow"
          name="shipping fast"
          size="big"
        />
        <div className="data-content">
          <p>Average Speed</p>
          <h2>28 km/hr</h2>
        </div>
        <Card.Content extra></Card.Content>
      </Card.Content>
    </Card>
  );
};

export default AverageSpeedData;
