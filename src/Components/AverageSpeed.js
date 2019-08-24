import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

const AverageSpeedData = () => {

    
    return (
        
        <Card  className="data-cards-r1" >
            <Card.Content>
            <Icon name="motorcycle" size="huge"/>
            <Card.Header>Average Speed</Card.Header>
            <Card.Content extra>
            <hr></hr>
                <p>28 km</p>
                
            </Card.Content>
            </Card.Content>
        </Card>
        
      
    )
}

export default AverageSpeedData;