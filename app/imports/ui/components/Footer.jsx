import React from 'react';
import { List, Grid, Input, Label, Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '5px', paddingBottom: '20px', color: 'white' };
    const background = { background: '#292929' };
    return (
        <footer style={background}>
          <div style={divStyle} className="ui center aligned container">
            <hr/>
            <div style={background}>
              <Grid>
                <Grid.Row columns={3} className="footer-grid">
                  <Grid.Column>
                    <List> QUICK LINKS
                      <hr/>
                      <List.Item> Home Page </List.Item>
                      <List.Item> Landing Page </List.Item>
                      <List.Item> Restaurants </List.Item>
                      <List.Item> Top Picks </List.Item>
                    </List>
                  </Grid.Column>

                  <Grid.Column>
                    <List> BOUJEE FOODIE
                      <hr/>
                      <List.Item> <Icon name='copyright outline'/> Since 2019 </List.Item>
                      <List.Item> All Rights Reserved </List.Item>
                      <List.Item> University of Hawaii at Manoa </List.Item>
                      <List.Item> Honolulu, HI 96822 </List.Item>
                    </List>
                  </Grid.Column>

                  <Grid.Column>
                    <List> CONNECT
                      <hr/>
                      <List.Item> Sign Up for the Latest Updates </List.Item>
                      <Input placeholder="Enter Email Address"/>
                      <Label color="grey"> Join </Label>
                    </List>
                  </Grid.Column>

                </Grid.Row>
              </Grid>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
