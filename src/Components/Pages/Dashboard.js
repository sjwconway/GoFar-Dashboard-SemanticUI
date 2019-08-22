import React, {Component} from 'react';
import LastFillUpData from '../../Components/LastFillUp';
import FuelLeftData from '../../Components/FuelLeft';
import DiagnosticIssuesData from '../../Components/DiagnosticIssues';
import BusinessTravelData from '../../Components/BusinessTravel';
import {Card} from 'semantic-ui-react';
class Dashboard extends Component {
    render() {
        return (
            <div className="ui container">
            <>
            
            <Card.Group>
            <LastFillUpData/>
              <FuelLeftData/>
              <DiagnosticIssuesData/>
              <BusinessTravelData/>
            </Card.Group>
            </>
            </div>
        )
    }
};

export default Dashboard;