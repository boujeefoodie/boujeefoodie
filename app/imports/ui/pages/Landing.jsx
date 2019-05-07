import React from 'react';
import { Grid, Card, Image, Button } from "semantic-ui-react";
import SearchBarCustom from '/imports/ui/components/SearchBarCustom';
import { Link } from "react-router-dom";

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {

  render() {
    const divStyle = { paddingBottom: '50px', paddingTop: '50px' };
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
              <Grid.Row columns={1}>
                <SearchBarCustom/>
              </Grid.Row>
            </Grid.Column>
          </Grid>
          <Grid container stackable centered columns={3} style={divStyle}>
            <Grid.Column textAlign={'center'}>
              <Card centered>
                <Card.Content>
                  <Card.Header>Sistah Food Truck</Card.Header>
                  <Image size='medium' src='/images/sistahtruck.jpg'/>
                  <Card.Description>
                    The Sistah Food Truck offer great tasting korean fusion fusion food at a
                    great price!<strong> -Kevin Liu</strong>
                      <Card.Content extra textAlign='center'>
                      <Link to={`/restaurantpage/b22eQ5uCQheL36kF3`}>
                          <Button color={'red'}> View Restaurant</Button>
                      </Link>
                      </Card.Content>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column textAlign={'center'}>
              <Card centered>
                <Card.Content>
                  <Card.Header>Kamitoku</Card.Header>
                  <Image size='medium'
                         src='images/kamitoku.jpg'/>
                  <Card.Description>
                    This ramen truck is a great spot to get ramen here on campus to fulfill my
                    ramen needs <strong> -Jon Tu</strong>
                      <Card.Content extra textAlign='center'>
                          <Link to={`/restaurantpage/qRiZmgQPEQWZ5R4jq`}>
                              <Button color={'red'}> View Restaurant</Button>
                          </Link>
                      </Card.Content>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column textAlign={'center'}>
              <Card centered>
                <Card.Content>
                  <Card.Header>Hot Tacos</Card.Header>
                  <Image style={{ width: '100%', height: '216px' }} size='medium'
                         src='images/hottacos.jpg'/>
                  <Card.Description>
                    Great Tacos! Must get the green and red taco sauce! Its Great!
                    <strong> -Jet Butac</strong>
                      <Card.Content extra textAlign='center'>
                          <Link to={`/restaurantpage/a63ic6AXRQdpqoook`}>
                              <Button color={'red'}> View Restaurant</Button>
                          </Link>
                      </Card.Content>
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
