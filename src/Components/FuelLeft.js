import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

const FuelLeftData = () => {

    
    return (
        
        <Card  className="data-cards-r1" >
            <Card.Content>
            <Icon circular inverted color="orange" name="tachometer alternate" size="big"/>
            <div className="data-content">
                <p>Esitmated Fuel Left:</p>
                <h2>58 km</h2>
            </div>
            <Card.Content extra>
            <hr></hr>
                <p>200km(since last fill up)</p>
            </Card.Content>
            </Card.Content>
        </Card>
        
      
    )
}

export default FuelLeftData;