import React, { Component,} from 'react'
import {Link} from 'react-router-dom';
import CarDropDown from './Dropdown';
import Dashboard from '../../src/Components/Pages/Dashboard';
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
            icon: 'arrow alternate circle right' }

  handleHideClick = () => this.setState({ visible: false})
  handleShowClick = () => this.setState({ visible: true, icon: '' })
  handleSidebarHide = () => this.setState({ visible: false, icon: 'arrow alternate circle right'})
  DisplayCarData = () => this.setState({visible: false})

  render() {
    const { visible, icon } = this.state  
    return (
      <div>
        
        <Button disabled={visible} onClick={this.handleShowClick}>
        <Icon name={icon} size='big'/>
        </Button>
      
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
            <Menu.Item as='a'>
              <Link to="/login">
              <Icon name='home' />
              Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Icon name='car' size='massive' />
              Cars
              <CarDropDown/>
              <Button onClick={this.DisplayCarData} className="ui inverted primary basic button">Show Data</Button>
            </Menu.Item>
            <Menu.Item as='a'>
              <Link to="/login">
              <Icon name='log out' />
              Logout
              </Link>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
              <Dashboard />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
