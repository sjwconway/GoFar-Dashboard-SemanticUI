import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

const DiagnosticIssuesData = () => {

    
    return (
        
        <Card  className="data-cards-r1" >
            <Card.Content>
            <Icon name="motorcycle" size="huge"/>
            <Card.Header>Diagnostic Issues</Card.Header>
            <Card.Content extra>
            <hr></hr>
                <p>Power Steering</p>
                <a>See a mechanic</a>
            </Card.Content>
            </Card.Content>
        </Card>
        
      
    )
}

export default DiagnosticIssuesData