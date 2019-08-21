import React, {Component} from 'react';
// import DashboardSidebar from '../DasboardSidebar';
import { Segment } from 'semantic-ui-react';
import CarData from '../../Components/CarData';
class Dashboard extends Component {
    render() {
        return (
            <>
            <h1>Dashboard</h1>
            <CarData></CarData>
            </>
        )
    }
};

export default Dashboard;