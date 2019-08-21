import React from 'react'
import { Grid, Image, Header, Statistic, Segment, Icon,} from 'semantic-ui-react'
const CarData = () => (
  <Grid columns={4} divided>
    <Grid.Row>
        <Segment>
      <Grid.Column>
        <Icon name="motorcycle" size="large"/><p>Last Fill Up</p>
        <Statistic size="mini">
            <Statistic.Value>325</Statistic.Value>
            <Statistic.Label>Litres</Statistic.Label>
        </Statistic>
      </Grid.Column>
      </Segment>
      <Segment>
      <Grid.Column>
        <Header as='h2'>Fuel</Header>
        <Statistic>
            <Statistic.Value>325</Statistic.Value>
            <Statistic.Label>Litres</Statistic.Label>
        </Statistic>
      </Grid.Column>
      </Segment>
      <Segment>
      <Grid.Column>
        <Header as='h2'>Fuel</Header>
        <Statistic>
            <Statistic.Value>325</Statistic.Value>
            <Statistic.Label>Litres</Statistic.Label>
        </Statistic>
      </Grid.Column>
      </Segment>
      <Segment>
      <Grid.Column>
        <Header as='h2'>Fuel</Header>
        <Statistic>
            <Statistic.Value>325</Statistic.Value>
            <Statistic.Label>Litres</Statistic.Label>
        </Statistic>
      </Grid.Column>
      </Segment>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default CarData;