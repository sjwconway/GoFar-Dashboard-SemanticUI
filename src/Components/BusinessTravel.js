import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

const BusinessTravelData = () => {

    
    return (
        
        <Card  className="data-cards-r1" >
            <Card.Content>
            <Icon name="motorcycle" size="huge"/>
            <Card.Header>Business Travel</Card.Header>
            <Card.Content extra>
            <hr></hr>
                <p>75%</p>
                <p>30000 km</p>
            </Card.Content>
            </Card.Content>
        </Card>
        
      
    )
}

export default BusinessTravelData;