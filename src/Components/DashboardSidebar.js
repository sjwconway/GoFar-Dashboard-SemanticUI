import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  HorizontalSidebar
} from 'semantic-ui-react';

export default class DashboardSidebar extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  }

  handleAnimationChange = animation => () =>
    this.setState(prevState => ({ animation, visible: !prevState.visible }))

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

  handleDirectionChange = direction => () => this.setState({ direction, visible: false })

  render() {
    const { animation, dimmed, direction, visible } = this.state
    const vertical = direction === 'bottom' || direction === 'top'

    return (
      <div>
        <Checkbox checked={dimmed} label='Dim Page' onChange={this.handleDimmedChange} toggle />

        <Header as='h5'>Direction</Header>
        <Button.Group>
          <Button active={direction === 'left'} onClick={this.handleDirectionChange('left')}>
            Left
          </Button>
          <Button active={direction === 'right'} onClick={this.handleDirectionChange('right')}>
            Right
          </Button>
          <Button active={direction === 'top'} onClick={this.handleDirectionChange('top')}>
            Top
          </Button>
          <Button active={direction === 'bottom'} onClick={this.handleDirectionChange('bottom')}>
            Bottom
          </Button>
        </Button.Group>

        <Header as='h5'>All Direction Animations</Header>
        <Button onClick={this.handleAnimationChange('overlay')}>Overlay</Button>
        <Button onClick={this.handleAnimationChange('push')}>Push</Button>
        <Button onClick={this.handleAnimationChange('scale down')}>Scale Down</Button>

        <Header as='h5'>Vertical-Only Animations</Header>
        <Button disabled={vertical} onClick={this.handleAnimationChange('uncover')}>
          Uncover
        </Button>
        <Button disabled={vertical} onClick={this.handleAnimationChange('slide along')}>
          Slide Along
        </Button>
        <Button disabled={vertical} onClick={this.handleAnimationChange('slide out')}>
          Slide Out
        </Button>

        <Sidebar.Pushable as={Segment}>
            <DashboardSidebar/> animation={animation} direction={direction} visible={visible} />
          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}