import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const EmissionsData = () => {

    
    return (
        
        <Card  className="data-cards-r1" >
            <Card.Content>
            <Icon circular inverted color="green" name="tree" size="big"/>
            <div className="data-content">
            <p>EMISSIONS</p>    
            <h2>74KG C02</h2>
            </div>
            </Card.Content>
        </Card>
        
      
    )
}

export default EmissionsData;