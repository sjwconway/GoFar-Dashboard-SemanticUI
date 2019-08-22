import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const EmissionsData = () => {

    
    return (
        
        <Card  className="data-cards-r1" >
            <Card.Content>
            <Icon name="motorcycle" size="huge"/>
            <Card.Header>EMISSIONS</Card.Header>
            <Card.Content extra>
            <hr></hr>
                <p>74 KG C02</p>
                
            </Card.Content>
            </Card.Content>
        </Card>
        
      
    )
}

export default EmissionsData;