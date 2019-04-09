import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default class Description extends React.Component {
  render() {
    return (
        <div className="description">
          <Grid container stackable rows={6}>

            <Grid.Row centered>
              <Header as="h1"> About Boujee Foodie</Header>
            </Grid.Row>

            <Grid.Row>
              <Header as="h4">
                The problem: There are many food choices on campus:
                campus center, food trucks, Manoa Gardens, Paradise Palms, vending machines, and so forth.
                Let’s say you have a desire for chinese food today for lunch.
                What places on campus are serving chinese food menu items today?
                Alternatively, let’s say that you love the fresh salmon fillet at Campus Center,
                but that dish is only served once every few weeks. How do you find out on the day that it’s available?
              </Header>
            </Grid.Row>

            <Grid.Row>
              <Header as="h4">
                The solution: The Boujee Foodie app enables you to login on your phone and determine:</Header>
            </Grid.Row>

            <Grid.Row>
              <p> - What specific menu items will be available today at campus center locations; </p>
            </Grid.Row>

            <Grid.Row>
              <p> - What food is available right now.</p>
            </Grid.Row>

            <Grid.Row>
              <p> - When a style of food you love is available today.</p>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
