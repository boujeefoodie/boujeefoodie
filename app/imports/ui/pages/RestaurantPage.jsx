import React from 'react';
import { Grid, Header, Rating, Image, Segment, List, Loader } from 'semantic-ui-react';
import { Restaurants } from '/imports/api/restaurant/restaurant';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';


/** A simple static component to render some text for the landing page. */
class RestaurantPage extends React.Component {

     state = {}

     handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })


    render() {
        return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
    }

    /** Render the page once subscriptions have been received. */
    renderPage() {
        return (
            <Grid divided='vertically'>
                <Grid.Row centered columns={3}>
                    <Grid.Column centered>
                        <Header as="h2">{this.props.restaurant.name}</Header>
                        <List>
                        <i className="dollar sign icon"></i>
                        </List>
                        <Image rounded size="large"
                               src={this.props.restaurant.image}/>
                    </Grid.Column>
                    <Grid.Column centered textAlign="right" style={{ paddingTop: '100px' }}>
                        <List>
                            <List.Item><Header>Location</Header></List.Item>
                            <List.Item>{this.props.restaurant.address}</List.Item>
                        </List>
                        <List>
                            <List.Item><Header>Operating Hours</Header></List.Item>
                            <List.Item>Monday - Friday</List.Item>
                            <List.Item>10:00 am - 2:00 pm</List.Item>
                        </List>
                        <Header>Description</Header>
                        <p>{this.props.restaurant.description}</p>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid verticalAlign='middle' columns={4} centered>
                        <Segment>
                            <Header as="h2" textAlign="center">
                                Reviews
                            </Header>
                        </Segment>
                        <div >
                        </div>
                            <Grid.Column width={4}>
                                <Rating icon = 'star' maxRating={5} size="huge" onRate={this.handleRate} />
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <div>Hello</div>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Rating icon = 'star' maxRating={5} size="huge" onRate={this.handleRate} />
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </Grid>

        );
    }
}

/** Require a document to be passed to this component. */
/** Require an array of Stuff documents in the props. */
RestaurantPage.propTypes = {
    restaurant: PropTypes.object,
    ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
    // Get access to Stuff documents.
    const restaurantId = match.params._id;
    const subscription = Meteor.subscribe('Restaurant');

    return {
        restaurants: Restaurants.findOne(restaurantId),
        ready: subscription.ready(),
    };
})(RestaurantPage);
