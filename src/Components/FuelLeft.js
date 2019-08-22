import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

const FuelLeftData = () => {

    
    return (
        
        <Card  className="data-cards-r1" >
            <Card.Content>
            <Icon name="motorcycle" size="huge"/>
            <Card.Header>Estimated Fuel Left</Card.Header>
            <Card.Content extra>
            <hr></hr>
                <p>58 km</p>
                <p>200km(since last fill up)</p>
            </Card.Content>
            </Card.Content>
        </Card>
        
      
    )
}

export default FuelLeftData;