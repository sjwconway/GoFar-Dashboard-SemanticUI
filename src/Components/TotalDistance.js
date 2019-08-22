import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

const TotalDistanceData = () => {

    
    return (
        
        <Card  className="data-cards-r1" >
            <Card.Content>
            <Icon name="motorcycle" size="huge"/>
            <Card.Header>34000km 4000km</Card.Header>
            <Card.Content extra>
            <hr></hr>
                <p>34000km (Total)</p>
                <p>4000km (This Year)</p>
            </Card.Content>
            </Card.Content>
        </Card>
        
      
    )
}

export default TotalDistanceData;