import React, { Component } from "react";
import LastFillUpData from "../../Components/LastFillUp";
import FuelLeftData from "../../Components/FuelLeft";
import DiagnosticIssuesData from "../../Components/DiagnosticIssues";
import BusinessTravelData from "../../Components/BusinessTravel";
import ParkingLocation from "../../Components/ParkingLocation";
import { Card, Statistic, Divider } from "semantic-ui-react";
import ParkingLocationData from "../../Components/ParkingLocation";
import AverageSpeedData from "../../Components/AverageSpeed";
import TotalDistanceData from "../../Components/TotalDistance";
import TimeInCarData from "../../Components/TimeInCar";
import EmissionsData from "../../Components/Emissions";
import FuelEconomyData from "../../Components/FuelEconomy";
import DataCard from "../DataCard";
import AntdTable from "../../Components/Tables/AntdTables";
class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="hero-img">
          <h1>Welcome User</h1>
          <div className="hero-img-car-data">
            <h3>Honda Civic</h3>
            <Divider hidden />
            <Statistic.Group size="mini">
              <Statistic>
                <Statistic.Value>157</Statistic.Value>
                <Statistic.Label>Trips </Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>35000 KM</Statistic.Value>
                <Statistic.Label>Total Distance</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>56</Statistic.Value>
                <Statistic.Label>Time in Car (hrs) </Statistic.Label>
              </Statistic>
            </Statistic.Group>
          </div>
        </div>
        <div className="ui container">
          <Card.Group>
            <LastFillUpData />
            <FuelLeftData />
            <DiagnosticIssuesData />
            <BusinessTravelData />
          </Card.Group>
        </div>
        <div className="ui container">
          <ParkingLocationData />
        </div>
        <div className="ui container">
          <Card.Group>
            <AverageSpeedData />
            <TotalDistanceData />
            <TimeInCarData />
          </Card.Group>
        </div>
        <div className="ui container">
          <Card.Group>
            <EmissionsData />
            <FuelEconomyData />
          </Card.Group>
        </div>
        <div className="ui container">
          <AntdTable />
        </div>
      </>
    );
  }
}

export default Dashboard;
