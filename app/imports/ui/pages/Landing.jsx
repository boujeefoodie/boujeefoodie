import React from 'react';
import { GoogleMap, Marker } from "react-google-maps"
import { Grid, Search, Card, Header, Container } from 'semantic-ui-react';
import MiddleMenu from '../components/MiddleMenu';
import Description from '../components/Description';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <MiddleMenu/>
        <Grid verticalAlign='middle' textAlign='center' container>
            <div className='landing-main'>
                <Search
                    style={{
                        paddingTop: '30px',
                        width: '500px',
                        }}
                    input = {{ fluid: true }}
                    placeholder = "Find..."
                    />
            </div>
            <Container>
                <Header style={{
                    paddingTop: '30px',
                }}>Top 3 Restaurants of this Month</Header>
                <hr/>
                <Card.Group centered>
                    <Card
                        image='/images/sistahtruck.jpg'
                        header='Sistah`s Food Truck'
                    />
                    <Card
                        image='/images/kamitoku.jpg'
                        header='Kamitoku Ramen Truck'
                    />
                    <Card
                        image='/images/hottacos.jpg'
                        header='Hot Tacos Truck'
                    />
                </Card.Group>
            </Container>
        </Grid>
            <Description/>
        </div>
    );
  }
}

export default Landing;
