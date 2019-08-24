import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

const FuelEconomyData = () => {

    
    return (
        
        <Card  className="data-cards-r1" >
            <Card.Content>
            <Icon name="motorcycle" size="huge"/>
            <Card.Header>Fuel Economy </Card.Header>
            <Card.Content extra>
            <hr></hr>
                <p>12L/100km</p>
                
            </Card.Content>
            </Card.Content>
        </Card>
        
      
    )
}

export default FuelEconomyData;