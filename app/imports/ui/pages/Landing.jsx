import React from 'react';
import { GoogleMap, Marker } from "react-google-maps";
import { Grid, Search, Card, Header, Container, Image } from 'semantic-ui-react';
import MiddleMenu from '../components/MiddleMenu';
import Description from '../components/Description';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {

  render() {
    return (
        <div className='landing-background'>
          <Grid container stackable centered columns={1}>
            <Grid.Column textAlign={'center'}>
              <Grid.Row className="title-main">
                <p className="main-text">
                  Boujee Foodie
                </p>
                <p className="side-text">
                  See all the local food services around you in Manoa with our list of restaurants
                  available to you! Check reviews of other Foodies and add your own!
                </p>
              </Grid.Row>
            </Grid.Column>
          </Grid>
          <Grid container stackable centered columns={3}>
            <Grid.Column textAlign={'center'}>
              <Card>
                <Card.Content>
                  <Card.Header>Sistah Food Truck</Card.Header>
                  <Image floated='center' size='medium'
                         src='/images/sistahtruck.jpg'/>
                  <Card.Description>
                    The Sistah Food Truck offer great tasting korean fusion fusion food at a
                    great price!<strong> -Kevin Liu</strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column textAlign={'center'}>
              <Card>
                <Card.Content>
                  <Card.Header>Kamitoku</Card.Header>
                  <Image floated='center' size='medium'
                         src='images/kamitoku.jpg'/>
                  <Card.Description>
                    This ramen truck is a great spot to get ramen here on campus to fulfill my
                    ramen needs <strong> -Jon Tu</strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column textAlign={'center'}>
              <Card>
                <Card.Content>
                  <Card.Header>Hot Tacos</Card.Header>
                  <Image style={{ width: '100%', height: '265px' }} floated='center' size='medium'
                         src='images/hottacos.jpg'/>
                  <Card.Description>
                    Great Tacos! Must get the green and red taco sauce! Its Great!
                    <strong> -Jet Butac</strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;
