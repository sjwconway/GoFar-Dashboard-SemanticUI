import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal,Menu } from 'semantic-ui-react'

const LogOutModal = () => (
  <Modal trigger={ <Menu.Item as='a'>
                    <Icon name='log out' />
                    Logout
                    </Menu.Item>} 
                    basic size='small'>
    <Header icon='log out' content='Are you sure?' />
    <Modal.Content>
      <p>
        Are you sure you want to log out?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button as='a' href="http://localhost:3000/" basic color='red' inverted>
         No
      </Button>
      <Button as={Link} to="/login" basic color='green' inverted>
         Yes    
      </Button>
    </Modal.Actions>
  </Modal>
)

export default LogOutModal;