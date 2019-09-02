import React from "react";
import { Card, Icon } from "semantic-ui-react";

const TimeInCarData = () => {
  return (
    <Card className="data-cards-r1">
      <Card.Content>
        <Icon circular inverted color="grey" name="car" size="big" />
        <div className="data-content">
          <p>Time in Car (this year)</p>
          <h2>120 Hours</h2>
        </div>
        <Card.Content extra></Card.Content>
      </Card.Content>
    </Card>
  );
};

export default TimeInCarData;
