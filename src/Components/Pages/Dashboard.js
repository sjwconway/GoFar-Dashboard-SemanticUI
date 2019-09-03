import React, { Component } from "react";
import LastFillUpData from "../../Components/LastFillUp";
import FuelLeftData from "../../Components/FuelLeft";
import DiagnosticIssuesData from "../../Components/DiagnosticIssues";
import BusinessTravelData from "../../Components/BusinessTravel";
import { Card, Container } from "semantic-ui-react";
import ParkingLocationData from "../../Components/ParkingLocation";
import AverageSpeedData from "../../Components/AverageSpeed";
import TotalDistanceData from "../../Components/TotalDistance";
import TimeInCarData from "../../Components/TimeInCar";
import EmissionsData from "../../Components/Emissions";
import FuelEconomyData from "../../Components/FuelEconomy";
import DataCard from "../DataCard";
import AntdTable from "../../Components/Tables/AntdTables";
import DashboardHeader from '../DashboardHeader';
import Footer from '../Footer';
class Dashboard extends Component {
  render() {
    return (
      <>
        <DashboardHeader/>
        <Container>
          <Card.Group>
            <LastFillUpData />
            <FuelLeftData />
            <DiagnosticIssuesData />
            <BusinessTravelData />
          </Card.Group>
        </Container>
        <Container>
          <ParkingLocationData />
        </Container>
        <Container>
          <Card.Group>
            <AverageSpeedData />
            <TotalDistanceData />
            <TimeInCarData />
          </Card.Group>
        </Container>
        <Container>
          <Card.Group>
            <EmissionsData />
            <FuelEconomyData />
          </Card.Group>
        </Container>
        <Container>
          <AntdTable />
        </Container>
        <Footer/>
      </>
    );
  }
}

export default Dashboard;
