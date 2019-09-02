import React, { Component,} from 'react'
import {Link} from 'react-router-dom';
import CarDropDown from './Dropdown';
import Dashboard from '../../src/Components/Pages/Dashboard';
import LogoutModal from '../Components/LogoutModal';
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

export default class DashboardSidebar extends Component {
  state = { visible: false,
            icon: 'sidebar' }

  handleHideClick = () => this.setState({ visible: false})
  handleShowClick = () => this.setState({ visible: true, icon: '' })
  handleSidebarHide = () => this.setState({ visible: false, icon: 'sidebar'})
  DisplayCarData = () => this.setState({visible: false})

  render() {
    const { visible, icon } = this.state  
    return (
        <>
          <div className="navbar-bg">
            <Button className="navbar-button" disabled={visible} onClick={this.handleShowClick}>
            <Icon name={icon} style={{color: '#fff'}} size='big'/>
            </Button>
        </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item>
              WELCOME USER!
            </Menu.Item>
            <Menu.Item>
              <Icon name='car' size='massive' />
              Cars
              <CarDropDown/>
              <Button onClick={this.DisplayCarData} className="ui inverted primary basic button">Show Data</Button>
            </Menu.Item>
            <Menu.Item >
              <Button onClick={this.handleSidebarHide} className="ui inverted red basic button">
              <Icon name='arrow circle left' size='large'/>
              Close Sidebar
              </Button>
              
            </Menu.Item>
            <LogoutModal hide={this.handleSidebarHide}/>
           
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
              <Dashboard />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
     </> 
    )
  }

}
