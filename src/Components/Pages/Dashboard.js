import React, { Component } from "react";
import LastFillUpData from "../../Components/LastFillUp";
import FuelLeftData from "../../Components/FuelLeft";
import DiagnosticIssuesData from "../../Components/DiagnosticIssues";
import BusinessTravelData from "../../Components/BusinessTravel";
import ParkingLocation from "../../Components/ParkingLocation";
import { Card, Statistic, Divider, Header, Icon, List } from "semantic-ui-react";
import ParkingLocationData from "../../Components/ParkingLocation";
import AverageSpeedData from "../../Components/AverageSpeed";
import TotalDistanceData from "../../Components/TotalDistance";
import TimeInCarData from "../../Components/TimeInCar";
import EmissionsData from "../../Components/Emissions";
import FuelEconomyData from "../../Components/FuelEconomy";
import DataCard from "../DataCard";
import AntdTable from "../../Components/Tables/AntdTables";
import { Link } from 'react-router-dom';
class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="hero-img">
          <Header as='h1'>Welcome back Ken!</Header>
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
        <div className="footer-content">
          <div className="media-content">
            <a href='https://www.facebook.com/GoFarCar/' target='_blank'><Icon className="icon-color" size='big' name='facebook official'/></a>
            <a href='https://twitter.com/gofarcar' target='_blank'><Icon size='big' className="icon-color"  name='twitter square'/></a>
            <a href='https://www.youtube.com/c/GofarCar' target='_blank'><Icon size='big' className="icon-color"  name='youtube'/></a>
            <a href='https://www.linkedin.com/company/gofar/' target='_blank'><Icon size='big' className="icon-color"  name='linkedin'/></a>
          </div>
          <div className="resources-content">
            <List>
              <List.Item as='a' href='https://www.gofar.co/features/' target='_blank'>Features</List.Item>
              <List.Item as='a' href='https://www.gofar.co/about-us/' target='_blank'>About Us</List.Item>
              <List.Item as='a'  href='https://www.gofar.co/fleets-government-corporations/' target='_blank'>Fleets,Governments,Coporations</List.Item>
              <List.Item as='a' href='https://www.gofar.co/blog/' target='_blank'>Blog</List.Item>
              <List.Item as='a' href='https://www.gofar.co/press-reviews/' target='_blank'>Press &#38; Reviews </List.Item>
            </List>
            <List>
              <List.Item as='a' href='https://www.gofar.co/support/' target='_blank'>Support</List.Item>
              <List.Item as='a' href='https://www.gofar.co/privacy-policy/' target='_blank'>Privacy Policy</List.Item>
              <List.Item as='a'>Legal</List.Item>
              <List.Item as='a'>Terms</List.Item>
              <List.Item as='a'>Shipping &#38; Refund Policy</List.Item>
            </List>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
