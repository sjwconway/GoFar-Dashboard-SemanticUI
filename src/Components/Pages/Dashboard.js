import React, {Component} from 'react';
import LastFillUpData from '../../Components/LastFillUp';
import FuelLeftData from '../../Components/FuelLeft';
import DiagnosticIssuesData from '../../Components/DiagnosticIssues';
import BusinessTravelData from '../../Components/BusinessTravel';
import ParkingLocation from '../../Components/ParkingLocation';
import {Card} from 'semantic-ui-react';
import ParkingLocationData from '../../Components/ParkingLocation';
import AverageSpeedData from '../../Components/AverageSpeed';
import TotalDistanceData from '../../Components/TotalDistance';
import TimeInCarData from '../../Components/TimeInCar';
import EmissionsData from '../../Components/Emissions';
import FuelEconomyData from '../../Components/FuelEconomy';
import AntdTable from '../../Components/Tables/AntdTables';
class Dashboard extends Component {
    render() {
        return (
         <>
           <div className="ui container">   
             <Card.Group>
               <LastFillUpData/>
                 <FuelLeftData/>
                 <DiagnosticIssuesData/>
                 <BusinessTravelData/>
             </Card.Group>
            </div>

            <ParkingLocationData/>
            <div className="ui container">
              <Card.Group >
                <AverageSpeedData/>
                <TotalDistanceData/>
                <TimeInCarData/>
              </Card.Group>
            </div>
            <div className="ui container">
            <Card.Group>
              <EmissionsData/>
              <FuelEconomyData/>    
            </Card.Group>
            </div>
            <AntdTable/> 
        </>
        )
    }
};

export default Dashboard;