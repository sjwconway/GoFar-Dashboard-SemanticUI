import React from 'react';
import { Card, Image, Divider, Icon, Responsive} from 'semantic-ui-react';

const LastFillUpData = () => {

    const cardStyle = {
        width: '100%'
    }
    return (
        <Responsive as={Card}>
              <Card style={cardStyle} className="data-cards-r1" >
            <Card.Content>
            <Icon name="motorcycle" size="huge"/>
            <Card.Header>Last Fill Up</Card.Header>
            <Card.Content extra>
            <hr></hr>
                <p>Thursday 15th Aug 3pm</p>
                <p>Last Location: Bondi Beach</p>
            </Card.Content>
            </Card.Content>
        </Card>
        </Responsive>
      
    )
}

export default LastFillUpData;