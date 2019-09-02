import React from "react";
import { Card, Icon } from "semantic-ui-react";

const DiagnosticIssuesData = () => {
  return (
    <Card className="data-cards-r1">
      <Card.Content>
        <Icon circular inverted color="red" name="wrench" size="big" />
        <div className="data-content">
          <p>Diagnostic Issues </p>
          <h2>Power Steering</h2>
        </div>
        <Card.Content extra>
          <hr></hr>
          <a>See a mechanic</a>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};

export default DiagnosticIssuesData;
