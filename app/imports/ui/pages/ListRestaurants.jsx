import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Restaurants } from '/imports/api/restaurant/restaurant';
import Restaurant from '/imports/ui/components/Restaurant';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListRestaurants extends React.Component {

  restaurants = [
    {
      name: 'Sistah`s Food Truck',
      address: 'POST',
      image: '/images/sistahtruck.jpg',
      description: 'A food truck with chicken katsu',
      tags: 'Asian, Korean, Lunch',
      price: '$',
    },
    {
      name: 'Kamitoku Ramen Truck',
      address: 'POST',
      image: '/images/kamitoku.jpg',
      description: 'Ramen and beef bowls ',
      tags: 'Asian, Japanese, Ramen',
      price: '$$$',
    },
    {
      name: 'Hot Tacos Truck',
      address: 'Campus Center',
      image: '/images/hottacos.jpg',
      description: 'Taco taco taco',
      tags: ['American', 'Donuts', 'Coffee', 'Breakfast'],
      price: '$$',
    }
  ]

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Restaurants List</Header>
          <Card.Group centered>
            {this.restaurants.map((restaurant, index) => <Restaurant restaurant={restaurant} key={index}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListRestaurants.propTypes = {
  restaurants: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Restaurant');
  return {
    restaurants: Restaurants.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListRestaurants);
