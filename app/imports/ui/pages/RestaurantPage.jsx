import React from 'react';
import { Grid, Header, Rating, Image, Segment, List, Loader, Button } from "semantic-ui-react";
import { Restaurants } from '/imports/api/restaurant/restaurant';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import AddReview from '../components/AddReview';
import Review from '/imports/ui/components/Review';
import { Reviews } from '../../api/reviews/review';


/** A simple static component to render some text for the landing page. */
class RestaurantPage extends React.Component {


    render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Grid divided='vertically'>
          <Grid.Row centered columns={3}>
            <Grid.Column centered>
              <Header as="h2">{this.props.doc.name}</Header>
              <List>
                <Header as="h3">{this.props.doc.price}</Header>
              </List>
              <Image rounded size="large"
                     src={this.props.doc.image}/>
            </Grid.Column>
            <Grid.Column centered textAlign="right" style={{ paddingTop: '100px' }}>
              <List>
                <List.Item><Header>Location</Header></List.Item>
                <List.Item>{this.props.doc.address}</List.Item>
              </List>
              <List>
                <List.Item><Header>Operating Hours</Header></List.Item>
                <List.Item>Monday - Friday</List.Item>
                <List.Item>10:00 am - 2:00 pm</List.Item>
              </List>
              <Header>Description</Header>
              <p>{this.props.doc.description}</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid verticalAlign='middle' columns={4} centered>
              <Segment>
                <Header as="h2" textAlign="center">
                  Reviews
                </Header>
              </Segment>
                <Grid.Column width={9}>
                    <AddReview restaurant={this.props.doc}/>
                </Grid.Column>
              <div >
              </div>
                {this.props.reviews.map((review, index) => <Review key={index} review={review}/>)}
            </Grid>
          </Grid.Row>
        </Grid>
    );
  }
}

/** Require a document to be passed to this component. */
/** Require an array of Stuff documents in the props. */
RestaurantPage.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
    reviews: PropTypes.array.isRequired,
    ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.

  const documentId = match.params._id;
  // Get access to Contacts documents.
  const subscription = Meteor.subscribe('Restaurant');
   const subscription2 = Meteor.subscribe('Reviews');

  return {
      reviews: Reviews.find({ restaurantName: (Restaurants.findOne(documentId) !== undefined) ?
              (Restaurants.findOne(documentId).name) : ('') }).fetch(),
    doc: Restaurants.findOne(documentId),
      ready: subscription.ready() && subscription2.ready(),
  };
})(RestaurantPage);
