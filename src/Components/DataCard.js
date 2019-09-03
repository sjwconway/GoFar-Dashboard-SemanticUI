import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";

class DataCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const {
      title,
      IconName,
      IconSize,
      data,
      description1,
      description2
    } = this.props;
    return (
      <Card className="data-cards-r1">
        <Card.Content>
          <Icon
            float="left"
            circular
            inverted
            color="teal"
            name={IconName}
            size={IconSize}
          />
          <div className="data-content">
            <p>{title}</p>
            <h2>{data}</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
            <p>{description1}</p>
            <p>{description2}</p>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default DataCard;
