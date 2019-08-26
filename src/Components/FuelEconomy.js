import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

const FuelEconomyData = () => {

    
    return (
        
        <Card  className="data-cards-r1" >
            <Card.Content>
            <Icon circular inverted color="violet" name="dollar sign" size="big"/>
            <div className="data-content">
            <p>Fuel Economy</p>
            <h2>12/100km</h2>
            </div>
            <Card.Content extra>
           
            </Card.Content>
            </Card.Content>
        </Card>
        
      
    )
}

export default FuelEconomyData;