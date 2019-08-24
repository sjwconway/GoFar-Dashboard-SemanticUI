import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

const TimeInCarData = () => {

    
    return (
        
        <Card  className="data-cards-r1" >
            <Card.Content>
            <Icon name="motorcycle" size="huge"/>
            <Card.Header>Time in Car (This Year) </Card.Header>
            <Card.Content extra>
            <hr></hr>
                <p>120 hours</p>
                
            </Card.Content>
            </Card.Content>
        </Card>
        
      
    )
}

export default TimeInCarData;